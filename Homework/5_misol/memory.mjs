import os, { freemem } from 'node:os'

const free = Math.floor(os.freemem() / 1024 / 1024) + ' ' + 'MB'

export const memory = { free }