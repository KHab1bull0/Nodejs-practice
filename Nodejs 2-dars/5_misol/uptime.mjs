import {uptime} from 'node:os'


export const time = `${Math.floor(uptime()/(60*60))}  soat`


