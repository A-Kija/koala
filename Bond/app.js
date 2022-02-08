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


console.log('-----------------');

let suma5 = 0;

let viso = 0;
let visoBe3 = 0;

for (let i = 0; i < 12; i++) {
    viso++;
    let kiauliukas = rand(1, 6);
    if (kiauliukas == 3) {
        continue;
    }
    visoBe3++;
    console.log(kiauliukas);
    suma5 = suma5 + kiauliukas;
}

console.log('kiauliuku suma:', suma5);
console.log(viso, visoBe3);





for (let i = 0; i < 3; i++) {
    console.log('EINA DIDELIS RATAS Nr.', i + 1);
    for (let k = 0; k < 3; k++) {
        console.log('eina mažas ratas Nr.', k + 1);
        for (let h = 0; h < 3; h++) {
            console.log('maziukas cikliukas Nr.', h + 1);
        }
    }
}

for (let k = 0; k < 10; k++) {

    let pliusai = '';

    for (let i = 0; i < 10; i++) {
        pliusai = pliusai + '+';
    }

    console.log(pliusai);

}

let a = 20;
console.log(a.toLocaleString('en-US', { minimumIntegerDigits: 2 }));

// be formatavimo

for (let valandos = 0; valandos < 24; valandos++) {

    for (let minutes = 0; minutes < 60; minutes = minutes + 15) {

        console.log(valandos + ':' + minutes);

    }

}


for (let valandos = 0; valandos < 24; valandos++) {

    for (let minutes = 0; minutes < 60; minutes = minutes + 15) {

        let formatMin = minutes <= 9 ? '0' + minutes : minutes;
        let formatVal = valandos <= 9 ? '0' + valandos : valandos;

        console.log(formatVal + ':' + formatMin);

        // console.log(
        //     valandos.toLocaleString('en-US', { minimumIntegerDigits: 2 }) +
        //     ':' +
        //     minutes.toLocaleString('en-US', { minimumIntegerDigits: 2 })
        //     );

    }

}