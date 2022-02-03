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