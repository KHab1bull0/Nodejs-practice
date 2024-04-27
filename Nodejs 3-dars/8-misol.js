

import fs from 'node:fs'

const fileName = 'message.txt';
const message = 'Hello World!';

try {
    fs.writeFileSync('./message.txt', message);
    console.log(`${fileName} fayliga ma'lumot muvaffaqiyatli yozildi.`);

} catch (err) {

    console.error(`Xatolik yuz berdi: ${err.message}`);
}
