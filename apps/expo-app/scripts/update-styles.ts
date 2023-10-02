import { watch } from 'fs';
import fs from 'fs/promises';

export const run = async () => {
    const info = await fs.stat(`../public/styles-web.gen.css`);
    const modified = info.mtime;

    fs.writeFile(`../app/style-version.gen.ts`, `export const styleVersion = '${modified}';`);
};

watch(`../public/styles-web.gen.css`, {}, () => {
    run();
});
