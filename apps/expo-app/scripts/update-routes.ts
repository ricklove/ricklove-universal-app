import { watch } from 'fs';
import fs from 'fs/promises';

const appRootPath = `../app`;
const sourceRootPath = `../../packages/app/`;

export const run = async () => {
    // TODO: automated route creation from feature packages
    // const info = await fs.stat(stylesPath);
    // const modified = info.mtime;
    // fs.writeFile(styleVersionPath, `export const styleVersion = '${modified}';`);
};

watch(sourceRootPath, { recursive: true }, () => {
    run();
});
