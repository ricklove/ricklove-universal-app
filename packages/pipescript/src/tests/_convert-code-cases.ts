import { readdir, stat } from 'fs/promises';
import { join } from 'path';

import { convertWorkflowToTypescriptFile } from '../code-generation/file';
import { convertTypescriptToPipescript } from '../core';
import { loadRuntime } from '../analysis/load-data';

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

export const jsonStringify_safe = (objRaw: unknown, shouldFormat?: boolean): string => {
    let nextId = 1;
    type Registry = Map<unknown, { ___id: string; minDepth: number; visited?: boolean }>;
    const deepRegister = (obj: unknown, visited: Registry, depth: number): unknown => {
        if (typeof obj === `object`) {
            if (!obj) {
                return obj;
            }

            // if (Array.isArray(obj)) {
            //     return obj.map(x => deepClone(x, visited, depth + 1));
            // }

            if (Array.isArray(obj)) {
                obj.forEach(x => deepRegister(x, visited, depth + 1));
            } else {
                Object.values(obj).forEach(x => deepRegister(x, visited, depth + 1));
            }

            const objReg = visited.get(obj);
            if (objReg) {
                objReg.minDepth = Math.min(depth, objReg.minDepth);
                return obj;
            }

            visited.set(obj, { ___id: `${nextId++}`, minDepth: depth });

            // return {
            //     ___id: visited.get(obj),
            //     ...Object.fromEntries(
            //         Object.entries(obj).map(([k, v]) => [k, deepClone(v, visited, depth + 1)]),
            //     ),
            // };

            return obj;
        }

        return obj;
    };

    const deepClone = (obj: unknown, visited: Registry, depth: number): unknown => {
        if (typeof obj === `object`) {
            if (!obj) {
                return obj;
            }

            const r = visited.get(obj);
            if (depth > (r?.minDepth ?? 0) || r?.visited) {
                return {
                    ___id: visited.get(obj)?.___id ?? ``,
                    ref: true,
                };
            }

            if (r) {
                r.visited = true;
            }

            if (Array.isArray(obj)) {
                return obj.map(x => deepClone(x, visited, depth + 1));
            }

            return {
                ___id: visited.get(obj),
                ...Object.fromEntries(
                    Object.entries(obj).map(([k, v]) => [k, deepClone(v, visited, depth + 1)]),
                ),
            };
        }

        return obj;
    };

    const registry: Registry = new Map();
    const obj_registered = deepRegister(objRaw, registry, 0);
    const obj = deepClone(obj_registered, registry, 0);

    // const visitedShallowParents = new Map<
    //     unknown,
    //     {
    //         id: number;
    //         obj: unknown;
    //         parent: unknown;
    //         depth: number;
    //         count: number;
    //     }
    // >();
    // const visitObj = (o: unknown, parent: unknown, depth: number) => {
    //     if (typeof o !== `object`) {
    //         return;
    //     }
    //     if (o == null) {
    //         return;
    //     }

    //     const existing = visitedShallowParents.get(o);
    //     if ((existing?.depth ?? 0) <= depth) {
    //         if (existing) {
    //             existing.count++;
    //         }
    //         return;
    //     }

    //     const id = visitedShallowParents.keys.length;
    //     visitedShallowParents.set(obj, {
    //         id,
    //         obj: o,
    //         parent,
    //         depth,
    //         count: (existing?.count ?? 0) + 1,
    //     });
    //     for (const k in o) {
    //         const oTyped = o as Record<string, unknown>;
    //         visitObj(oTyped[k], o, depth + 1);
    //     }
    // };
    // visitObj(obj, undefined, 0);

    const visited = [] as unknown[];
    return JSON.stringify(
        obj,
        (_, val: unknown) => {
            if (val != null && typeof val === `object`) {
                const i = visited.indexOf(val);
                if (i >= 0) {
                    return `[OBJ-DUPLICATED: ___id_${i}_]`;
                }
                const iNext = visited.push(val) - 1;
                (val as { ___id: string }).___id = `___id_${iNext}_`;
            }
            return val;
        },
        shouldFormat ? 2 : 0,
    );
};

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
                        rootNodeInstances: runtime.rootNodeInstances,
                    },
                    true,
                ),
            );

            const generatedCode = convertWorkflowToTypescriptFile(projectWorkflow);
            Bun.write(`${filePath}.from-workflow.gen.ts.ignore`, generatedCode.content);
        } catch (err) {
            console.error(`convert code error`, { err });
        }
    }
};

run().catch(console.error);
