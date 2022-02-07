'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let ratai = 2;


for (let i = 0; i < ratai; i++) {
    //ziedas
    console.log('Rate Nr.', i);
    //ziedas
}

console.log('Pabaiga');



for (let i = 0; i < 22; i++) {
    // ratas
    console.log('Hello');
    // ratas
}




for (let i = 0; i < 22; i++) {
    // ratas
    console.log(rand(1, 5));
    // ratas
}


// for (let i = 0; i < 14; i++) {
//     console.log('Hello Africa');
// }


// for (let i = 0; i < 14; i++) {
//     console.log('Hello Africa', i + 1);
// }


// for (let i = 1; i < 15; i++) {
//     console.log('Hello Africa', i);
// }


// let x = true;
// let y = 0;

// if (x = y) {
//     console.log('Ja');
// } else {
//     console.log('No');
// }

// x = false;
// y = false;

// if ((x = y)) {
//     console.log('Ja');
// } else {
//     console.log('No');
// }

let cat = 'Murklys';
let stringoIlgis = cat.length;

console.log(cat[0], cat[2], stringoIlgis);

let cat2 = 'Batuotas Katinas';

console.log(cat2[rand(0, cat2.length - 1)]);

console.log('-------------------------');

// console.log(cat2[0]);
// console.log(cat2[1]);
// console.log(cat2[2]);
// console.log(cat2[3]);
// console.log(cat2[4]);
// console.log(cat2[5]);
// console.log(cat2[6]);
// console.log(cat2[7]);

for (let i = 0; i < cat2.length; i++) {
    let raide = cat2[i];
    console.log(raide);
}

let kiekYraAraidziu = 0;

for (let i = 0; i < cat2.length; i++) {
    // let raide = cat2[4]; O 5 raidė
    // let raide = cat2; 'Batuotas Katinas'
    let raide = cat2[i]; // 0,1,2,3,4,5,6... dalį stringo, pažymėtą i
    if (raide == 'a') {
        kiekYraAraidziu++;
    }
}

console.log(kiekYraAraidziu);

// ''

let pirmaA = -1;
let paskutineA = -1;
let pirmasABuvo = 0; // pirmos a buvimo flag

for (let i = 0; i < cat2.length; i++) {
    if (cat2[i] == 'a') {
        paskutineA = i;
        if (pirmasABuvo == 0) {
            pirmasABuvo = 1;
            pirmaA = i;
        }
    }
}

// pirmaA = 1;
// paskutineA = 14;

console.log(pirmaA, paskutineA);