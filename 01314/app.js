'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const mas = c => {
    const m = [];
    for (let i = 0; i < c; i++) {
        m.push(rand(0, 7))
    }
    return m;
}

console.log(mas(22));


// const abcdz = () => 'abcdz' [rand(0, 4)];

const abcdz = () => {
    const word = 'abcdz';
    const random = rand(0, 4);
    return word[random];
}

const az = () => {
    const word = 'qwertyuiopasdfghjklzxcvbnm';
    const random = rand(0, word.length - 1);
    return word[random];
}

const aPlus = () => {
    const word = 'ąčęėįšųūž';
    const random = rand(0, word.length - 1);
    return word[random];
}

const _123 = () => {
    const word = '0123456789';
    const random = rand(0, word.length - 1);
    return word[random];
}

console.log(abcdz());



const line = l => {
    let returnStr = '';
    for (let i = 0; i < l; i++) {
        returnStr = returnStr + az();
    }
    return returnStr;
}

const fancyLine = (l, f) => {
    let returnStr = '';
    for (let i = 0; i < l; i++) {
        returnStr = returnStr + f();
    }
    return returnStr;
}

console.log(fancyLine(10, () => {
    const word = '/*-+';
    const random = rand(0, word.length - 1);
    return word[random];
}));


// console.log(fancyLine(10, aPlus));
// console.log(fancyLine(10, abcdz));


const suma = (a, b) => a + b;
const skirtumas = (a, b) => a - b;
const daugyba = (a, b) => a * b;
const dalyba = (a, b) => a / b;

// const skaiciuoti = (a, b, v) => v(a, b);

const skaiciuoti = (a, b, v) => {
    let rezultatas;
    rezultatas = v(a, b);
    return rezultatas;
}

console.log(skaiciuoti(18, 5, (a, b) => a % b));

// const print = () => {
//     console.log(aPlus());
// }



// setInterval(() => {
//     console.log('!@#$%^&*' [rand(0, 7)]);
// }, 1000);

// setInterval(() => {
//     console.log('12345678' [rand(0, 7)]);
// }, 1000);


const girls = ['Lina', 'Birutė', 'Justė', 'Brigita', 'Deimantė'];


// for (let i = 0; i < girls.length; i++) {
//     console.log(girls[i]);
// }

const printGirl = (girl) => {
    console.log(girl)
}


// girls.forEach(i => console.log(i));
// girls.forEach(printGirl);

const m10 = [];
for (let i = 0; i < 10; i++) {
    m10.push(rand(0, 11));
}

console.log(m10);