import { watch } from 'fs';
import fs from 'fs/promises';

const stylesPath = `../public/styles-web.gen.css`;
const styleVersionPath = `../app/_style-version.gen.css`;

export const run = async () => {
    const info = await fs.stat(stylesPath);
    const modified = info.mtime;

    fs.writeFile(styleVersionPath, `export const styleVersion = '${modified}';`);
};

watch(stylesPath, {}, () => {
    run();
});
