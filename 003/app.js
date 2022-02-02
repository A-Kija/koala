'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// RECAP

let skaicius = 5;
let stringas = 'Bla bla bla';
let loginis = true;

console.log(typeof skaicius, typeof stringas, typeof loginis);

console.log('aritmetika: ', skaicius * skaicius);
console.log('sujungimas: ', stringas + ' ' + stringas);
console.log('logika: ', loginis || loginis);

console.log('skirtingi 1: ', skaicius * loginis); // loginis -> number
console.log('skirtingi 2: ', stringas + loginis); // loginis -> string

if (0) {
    console.log('Jo');
} else {
    console.log('No');
}

//Comparison operators


console.log('3 == 4', 3 == 4);
console.log('3 == 3', 3 == 3);

console.log('3 > 4', 3 > 4);
console.log('4 > 3', 4 > 3);
console.log('4 > 4', 4 > 4);

console.log('3 < 4', 3 < 4);
console.log('4 < 3', 4 < 3);
console.log('4 < 4', 4 < 4);

console.log('3 >= 4', 3 >= 4);
console.log('4 >= 3', 4 >= 3);
console.log('4 >= 4', 4 >= 4);

console.log('3 <= 4', 3 <= 4);
console.log('4 <= 3', 4 <= 3);
console.log('4 <= 4', 4 <= 4);

console.log('3 != 4', 3 != 4);
console.log('3 != 3', 3 != 3);

console.log('-------------------------------');

console.log('3 == "3"', 3 == '3');
console.log('1 == true', 1 == true);
console.log('3 === "3"', 3 === '3');
console.log('1 === true', 1 === true);
console.log('3 === 3', 3 === 3);

console.log('3 !== 3', 3 !== 3);
console.log('3 !== "3"', 3 !== '3');


if (13 > 5) {
    console.log('Jo');
} else {
    console.log('Nea');
}


let egzaminoPazimys = rand(1, 10);

if (egzaminoPazimys >= 4) {
    console.log('Gerai', egzaminoPazimys);
} else {
    console.log('Blogai', egzaminoPazimys);
}


let autoGreitis = rand(30, 120);

if (autoGreitis <= 90) {
    console.log('Normalus greitis', autoGreitis);
} else {
    let bauda = (autoGreitis - 90) * 5;
    console.log(`
    Greitis yra ${autoGreitis} km/h.
    Bauda yra ${bauda} eur.
    `);
}

let skaiciusNr1 = rand(1, 3);
let skaiciusNr2 = rand(1, 3);

if (skaiciusNr1 + skaiciusNr2 > skaiciusNr1 * skaiciusNr2) {
    console.log('+ daugiau', skaiciusNr1, skaiciusNr2);
} else {
    console.log('* daugiau', skaiciusNr1, skaiciusNr2);
}