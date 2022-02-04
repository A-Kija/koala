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