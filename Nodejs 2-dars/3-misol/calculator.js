

// console.log(process.argv)
let a = +process.argv[2]
let amal = process.argv[3]
let b = +process.argv[4]

switch(amal){
    case '+':
        console.log(a + b);
        break;
    case '-':
        console.log(a - b);
        break;
    case '/':
        console.log(a / b);
        break;
    case '%':
        console.log(a % b)
        break;
    
    default:
        if(amal == 'calculator.js'){
            console.log()
        } else {
            console.log('Xato amal tiritildi.')
        }
        break;
}
