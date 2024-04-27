
import { objToArray, arrayToObj, stringToBoolean } from "./converters/index.js";

const [file, args] = [process.argv[2], process.argv[3]]

console.log(args)


function func(command, args) {
    switch (command) {
        case 'Object':
            console.log(objToArray(args));
            break;
        case 'Array':
            console.log(arrayToObj(args));
            break;
        case 'String':
            console.log(stringToBoolean(args));
            break;
        default:
            console.log('Error file');
    }
}

func(file, args);
