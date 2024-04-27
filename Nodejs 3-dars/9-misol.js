import fs from 'fs'

const text = ' This is appended content.'
const paths = 'message.txt'

fs.appendFile(paths, text, (err) => {
    if (err) {
        console.error(`Xatolik yuz berdi: ${err.message}`);
    } else {
        console.log(`${paths} fayliga ma'lumot muvaffaqiyatli qo'shildi.`);
    }
});
