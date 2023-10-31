export const jsonStringify_safe = (objRaw: unknown, shouldFormat?: boolean): string => {
    let nextId = 1;
    type Registry = Map<unknown, { id: string; minDepth: number; visited?: boolean }>;
    const deepRegister = (obj: unknown, visited: Registry, depth: number): void => {
        if (typeof obj !== `object`) {
            return;
        }

        if (!obj) {
            return;
        }

        const objReg = visited.get(obj);
        if (objReg) {
            objReg.minDepth = Math.min(depth, objReg.minDepth);
            return;
        }

        visited.set(obj, { id: `_id_${nextId++}_`, minDepth: depth });

        if (Array.isArray(obj)) {
            obj.forEach(x => deepRegister(x, visited, depth + 1));
            return;
        }

        Object.values(obj).forEach(x => deepRegister(x, visited, depth + 1));
        return;
    };

    const deepClone = (obj: unknown, visited: Registry, depth: number): unknown => {
        if (typeof obj === `object`) {
            if (!obj) {
                return obj;
            }

            const r = visited.get(obj);
            if (depth > (r?.minDepth ?? 0) || r?.visited) {
                return {
                    ___ref: visited.get(obj)?.id ?? ``,
                };
            }

            if (r) {
                r.visited = true;
            }

            if (Array.isArray(obj)) {
                return obj.map(x => deepClone(x, visited, depth + 1));
            }

            return {
                [visited.get(obj)?.id ?? ``]: ``,
                ...Object.fromEntries(
                    Object.entries(obj).map(([k, v]) => [k, deepClone(v, visited, depth + 1)]),
                ),
            };
        }

        return obj;
    };

    const registry: Registry = new Map();
    deepRegister(objRaw, registry, 0);
    const obj = deepClone(objRaw, registry, 0);

    const visited = [] as unknown[];
    return JSON.stringify(obj, null, shouldFormat ? 2 : 0);
};
