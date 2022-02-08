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