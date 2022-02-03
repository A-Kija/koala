'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let vieta = rand(1, 200);

console.log('Vieta: ', vieta);

if (vieta % 2) {
    // neporinis/nelyginis i kaire
    if (vieta <= 100) {
        console.log('Kairė-Apačia');
    } else {
        console.log('Kairė-Viršus');
    }
} else {
    // porinis/lyginis i desine
    if (vieta <= 100) {
        console.log('Dešinė-Apačia');
    } else {
        console.log('Dešinė-Viršus');
    }
}

if (vieta % 2 && vieta <= 100) {
    console.log('Kairė-Apačia');
} else if (vieta % 2) {
    console.log('Kairė-Viršus');
} else if (vieta <= 100) {
    console.log('Dešinė-Apačia');
} else {
    console.log('Dešinė-Viršus');
}

let kokiaSpalva;

console.log(kokiaSpalva);

if (0) {
    kokiaSpalva = 'Raudona';
} else {
    kokiaSpalva = 'Geltona';
}

console.log(kokiaSpalva);

let katinoVardas;

console.log(katinoVardas);

katinoVardas = (1) ? 'Rudis' : 'Pilkis';

console.log(katinoVardas);

// 1 - A, 2 - B, 3 - C

let number = 3;
let letter;

console.log(letter);

// letter = (number == 1) ? 'A' : ((number == 2) ? 'B' : 'C');

letter = number == 1 ? 'A' : number == 2 ? 'B' : 'C';

console.log(letter);


let didMaz = 5;

if (0) {
    didMaz++;
} else {
    didMaz--;
}

true ? didMaz++ : didMaz--;

console.log(didMaz);

console.log(' ' < 'a');
console.log(122 < 97);

let as = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';
let tu = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';
// Išvesti as ir tu kintamuosius ir kas laimėjo as ar tu

console.log('as:', as, 'tu:', tu);

if (as == tu) {
    console.log('Lygiosios')
} else {
    if (as == 'popierius') {
        console.log(tu == 'zirklės' ? 'TU' : 'AS');
    } else if (as == 'akmuo') {
        console.log(tu == 'zirklės' ? 'AS' : 'TU');
    } else {
        console.log(tu == 'akmuo' ? 'TU' : 'AS');
    }
}