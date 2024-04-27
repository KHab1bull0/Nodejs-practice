import { memory } from "./memory.mjs";
import { time } from "./uptime.mjs";
import { info } from "./process.mjs";


console.log(memory.free)
console.log(time, 'soat')
console.log(info)



export const  infos = {
    memory,
    time,
    info
}