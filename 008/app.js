'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let siuntinys = 'S';


// if (siuntinys == 'S') {
//     console.log('galima dėti į S');
// }

// if (siuntinys == 'S' || siuntinys == 'M') {
//     console.log('galima dėti į M');
// }

// if (siuntinys == 'S' || siuntinys == 'M' || siuntinys == 'L') {
//     console.log('galima dėti į L');
// }

switch (siuntinys) {
    case 'S':
        console.log('galima dėti į S');
    case 'M':
        console.log('galima dėti į M');
        break;
    case 'L':
        console.log('galima dėti į L');
        break;
    default:
        console.log('galima dėti į XL');
}

let antanas = rand(1, 6);

console.log('Antanas:', antanas);

switch (antanas) {
    case 1:
    case 5:
        console.log('TV');
        break;
    case 3:
    case 4:
        console.log('Skalbyklė');
        break;
    default:
        console.log('Šaldyklė');
}


// for (let i = 0; i < 3; i++) {
//     console.log('Valio', i);
// }

let i = 8;
while (i < 3) {
    console.log('Valio', i);
    i++;
}

console.log('________________________');

let k = 8;
do {
    console.log('Valio', k);
    k++;
} while (k < 3);


//while nuo 0 iki >>>
//do while nuo 1 iki >>>

// for naudojamas kai iš anksto yra ŽINOMA kiek ciklų bus
// while ir do while naudojamas kai iš anksto yra NĖRA ŽINOMA kiek ciklų bus

let saugiklis = 0;

let kartai = 0;


let iskrito;
do {
    if (saugiklis++ > 100) break;
    kartai++;
    iskrito = rand(0, 1); // 0 -> Herbas, 1 -> skaicius
    console.log(iskrito);
} while (iskrito == 1);

console.log('KARTAI', kartai);


let kiekKartu = 0;
let kauliukuSuma = 0;

do {
    let kauliukas = rand(1, 6);
    console.log(kauliukas);
    kauliukuSuma = kauliukuSuma + kauliukas;
    kiekKartu++;
} while (kauliukuSuma <= 21);

console.log('REZ:', kauliukuSuma, kiekKartu);


let kiauliukas;

do {
    kiauliukas = rand(1, 6);
} while (kiauliukas != 1 && kiauliukas != 4);

/*
== -> !=
=! -> ==
< -> >=
> -> <=
<= -> >
>= -> <
|| -> &&
&& -> ||
*/