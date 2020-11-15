console.clear();

const names = [
    'Elvin',
    'Cavid',
    'Anar',
    'Aytan',
    'Ismayil',
    'Musa',
    'Shams',
    'Orkhan',
    'Madina',
    'Parvin',
    'Famil',
    'Jafar',
    'Nigar',
    'Ayshan',
];

// for (let i = 0; i < names.length; i++) {
//
// }

// let a = 22;
// //
// // a += 7; // equals -> a = a + 7
// // a -= 7; // equals -> a = a - 7
// // a *= 5;
// // a /= 5;
// a %= 5; // equals -> a = a % 5

// const numbers = [1, 2, 3, 4, 5, 6];
//
// for (let i = 0; i < numbers.length; i++) {
//     const currentNumber = numbers[i];
//
//     if (currentNumber % 2 === 0) {
//         console.log(currentNumber + ' cut ededdir');
//     } else {
//         console.log(currentNumber + ' tek ededdir');
//     }
// }

// if ('' === false) {
//     console.log('==');
// }

const numbers = [3, 4, 6, 7, 8, 9];

// for (let i = 0; i < numbers.length; i++) {
//     const currentNum = numbers[i];
//
//     if (currentNum > 5 && currentNum % 2 === 0) {
//         console.log(currentNum);
//     }
// }
//
// let i = 0;
//
// for (let j = 0; j < 10; j++) {
//     console.log('j ' + j)
// }

function sum (number1, number2) {
    return number1 + number2;
}

function subtract (from, number) {
    return from - number;
}

const value = subtract(12, 24);


// FUNCTION

function startsWithA (word) {
    if (word.toLowerCase().startsWith('a')) {
        return true;
    } else {
        return false;
    }
}

// for (let i = 0; i < names.length; i++) {
//     const currentName = names[i];
//
//     if (startsWithA(currentName)) {
//         console.log(currentName);
//     }
// }

// WHILE

// let i = 0;
//
// while (i < names.length) {
//     const currentName = names[i];
//
//     if (startsWithA(currentName)) {
//         console.log(currentName)
//     }
//
//     i++;
// }

const operatorCode = '050';

// Long if statement

// if (operatorCode === '050' || operatorCode === '051') {
//     console.log('AZERCELL');
// } else if (operatorCode === '055' || operatorCode === '099') {
//     console.log('BAKCELL');
// } else if (operatorCode === '070' || operatorCode === '077') {
//     console.log('NAR');
// } else {
//     console.log('Bele operator yoxdur!');
// }


// SWITCH

// switch (operatorCode) {
//     case '050':
//         console.log('AZERCELL');
//         break;
//     case '051':
//         console.log('AZERCELL');
//         break;
//     case '070':
//         console.log('NAR');
//         break;
//     default:
//         console.log('Bele operator yoxdur!');
//         break;
// }

const code = 'AZN';

switch (code) {
    case 'AZN':
        console.log('manat');
        break;
    case 'USD':
        console.log('dollar');
        break;
    case 'EUR':
        console.log('euro');
        break;
    default:
        console.log('valyuta tapilmadi');
        break;
}
