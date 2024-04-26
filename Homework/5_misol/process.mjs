
import { fileURLToPath } from 'url';
import path from 'path';
import os from 'node:os'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const info = {
    dirname: __dirname,
    filename: __filename,
    nodepath: process.argv[0],
    args: process.argv,
    useros: os.userInfo
}
