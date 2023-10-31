import { readdir, stat } from 'fs/promises';
import { join } from 'path';

import { loadRuntime } from '../analysis/load-data';
import { convertWorkflowToTypescriptFile } from '../code-generation/file';
import { convertTypescriptToPipescript } from '../core';
import { jsonStringify_safe } from '../utils/json';

async function getAllFiles(directoryPath: string): Promise<string[]> {
    const info = await stat(directoryPath);
    if (info.isFile()) {
        return [directoryPath];
    }
    if (!info.isDirectory()) {
        return [];
    }
    const fileNames = await readdir(directoryPath);
    const filePaths = (
        await Promise.all(
            fileNames.map(fn => {
                const subPath = join(directoryPath, fn);
                return getAllFiles(subPath);
            }),
        )
    ).flatMap(x => x);
    return filePaths.sort();
}

export const run = async () => {
    const allFiles = await getAllFiles(`./code`);
    const tsFiles = allFiles.filter(x => x.endsWith(`.ts`));

    for (const filePath of tsFiles) {
        try {
            console.log(`${filePath}`);

            const content = await Bun.file(filePath).text();
            const projectWorkflow = convertTypescriptToPipescript([
                {
                    filename: `file.ts`,
                    code: content,
                },
            ]);
            Bun.write(`${filePath}.workflow.json`, JSON.stringify(projectWorkflow, null, 2));

            const runtime = loadRuntime(projectWorkflow);
            Bun.write(
                `${filePath}.workflow-runtime.json`,
                jsonStringify_safe(
                    {
                        allWorkflows: runtime.context.allWorkflows,
                        allNodes: runtime.context.allNodes,
                        rootNodeInstances: runtime.dataset.rootNodeInstances,
                    },
                    true,
                ),
            );

            const generatedCode = convertWorkflowToTypescriptFile(projectWorkflow, runtime.dataset);
            Bun.write(`${filePath}.from-workflow.gen.ts.ignore`, generatedCode.content);
        } catch (err) {
            console.error(`convert code error`, { err });
        }
    }
};

run().catch(console.error);
