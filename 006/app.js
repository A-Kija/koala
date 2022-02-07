'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 1; i < 6; i++) {
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    console.log(i + 1);
}

let abcdef = 'ABCDEFHHH';
for (let i = 0; i < abcdef.length; i++) {
    console.log(abcdef[i]);
}

console.log('------------------------------');

for (let i = 1; i < 6; i++) {
    console.log(i * 10);
}

console.log('------------------------------');

for (let i = 10; i <= 50; i = i + 10) {
    console.log(i);
}

console.log('------------------------------');

for (let i = 1; i <= 50; i++) {
    if (i % 10 == 0) {
        console.log(i);
    }

}

console.log('------------------------------');

let suma1 = 0; //Number
let suma2 = ''; //String

for (let i = 1; i < 16; i++) {
    suma1 = suma1 + i;
    suma2 = suma2 + i;
}

console.log(suma1, suma2);

let stars = '';
for (let i = 0; i < 40; i++) {
    stars = stars + '*';
}

console.log(stars);



console.log('------------------------------');


let suma3 = ''; //String
let suma4 = ''; //String

for (let i = 1; i < 16; i++) {
    suma3 = suma3 + i;
    suma4 = i + suma4;
}

console.log(suma3, suma4);

let suma5 = ''; //String
for (let i = 15; i >= 1; i--) {
    suma5 = suma5 + i;
}

console.log(suma5);