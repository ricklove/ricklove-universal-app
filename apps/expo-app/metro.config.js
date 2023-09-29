const { getDefaultConfig } = require(`expo/metro-config`);
const fs = require(`fs`);
const path = require(`path`);

// Find the project and workspace directories
const projectRoot = __dirname;
// This can be replaced with `find-yarn-workspace-root`
const workspaceRoot = path.resolve(projectRoot, `../..`);

const config = getDefaultConfig(projectRoot);

const getAllDirs = (d, visited = []) => {
    if (visited.includes(d)) {
        return [];
    }
    visited.push(d);
    const dirs = fs.readdirSync(d, { recursive: true, withFileTypes: true });
    const packagesDirs = dirs
        .filter(x => x.isDirectory() && x.name !== `node_modules`)
        .map(x => `${d}/${x.name}`);
    return [...packagesDirs, ...packagesDirs.flatMap(x => getAllDirs(x, visited))];
};

const allPackageDirs = getAllDirs(`${workspaceRoot}/packages`);
//.filter(x => x.includes(`packages`));

console.log(`--- allPackageDirs ---`, {
    allPackageDirs,
});

// 1. Watch all files within the monorepo
config.watchFolders = [workspaceRoot, ...allPackageDirs];
// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, `node_modules`),
    path.resolve(workspaceRoot, `node_modules`),
];
// 3. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
config.resolver.disableHierarchicalLookup = true;

console.log(`--- metro ---`, {
    workspaceRoot,
    // resolver: config.resolver
});

module.exports = config;
