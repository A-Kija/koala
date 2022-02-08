'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let suma1 = 0;

for (let i = 0; i < 12; i++) {
    let kauliukas = rand(1, 6);
    console.log(kauliukas);
    suma1 = suma1 + kauliukas;
}

console.log('Suma: ', suma1);

for (let i = 0; i < 5; i++) {
    let reikiaNutraukti = false;
    let skaicius = 5;
    if (reikiaNutraukti == true) {
        break;
    }

    if (skaicius > 10) {
        break;
    }

    if (i > 2) {
        break;
    }


    console.log('sukasi', i);

}

console.log('-----------------');

let suma2 = 0;
let ratuSkaitiklis = 0;

for (let i = 0; i < 17; i++) {
    let kauliukas = rand(1, 6);
    console.log(kauliukas);
    if (suma2 + kauliukas > 35) {
        break;
    }
    suma2 = suma2 + kauliukas;
    ratuSkaitiklis++;
}

console.log('Suma: ', suma2);
console.log('Ratu: ', ratuSkaitiklis);
console.log('Baigta anksciau: ', 17 - ratuSkaitiklis);