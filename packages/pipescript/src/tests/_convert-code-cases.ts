import { readdir, stat } from 'fs/promises';
import { join } from 'path';

import { convertTypescriptToPipescript } from '../core';

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
        console.log(`${filePath}`);

        const content = await Bun.file(filePath).text();
        const projectWorkflow = convertTypescriptToPipescript([
            {
                filename: `file.ts`,
                code: content,
            },
        ]);
        const workflow = projectWorkflow.workflows?.[0]!;

        Bun.write(`${filePath}.workflow.json`, JSON.stringify(workflow, null, 2));
    }
};

run().catch(console.error);
