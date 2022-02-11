'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


console.log('---------------1----------------');

for (let i = 10; i > 0; i--) {
    console.log(i)
}

console.log('---------------2----------------');

let suma2 = 0;
for (let i = 0; i < 10; i++) {
    let greitis = rand(120, 220);
    suma2 = suma2 + greitis;
}
console.log(suma2 / 10);

console.log('---------------3----------------');

let kuras = 44;

for (let i = 0; i < 10; i++) {
    let isnaudota = rand(3, 6);
    kuras = kuras - isnaudota;
    if (kuras <= 0) {
        break;
    }
    console.log(i);
}

console.log(kuras <= 0 ? 'Nepavyko' : 'Pavyko');


console.log('---------------4----------------');
let min = 120;

for (let i = 0; i < 10; i++) {

    for (let k = 0; k < 5; k++) {
        let greitis = rand(20, 120);
        if (greitis < min) {
            min = greitis;
        }
    }

}
console.log(min);

console.log('---------------5----------------');

let kengura;
let stabdziai;
let vairas;
let km = 0;

do {
    kengura = rand(0, 1);
    stabdziai = rand(0, 1);
    vairas = rand(0, 1);
    km++;

    console.log(kengura, stabdziai, vairas);

} while (kengura + stabdziai + vairas != 3);

km = 0;

do {
    kengura = !!rand(0, 1);
    stabdziai = !!rand(0, 1);
    vairas = !!rand(0, 1);
    km++;

    console.log(kengura, stabdziai, vairas);

} while (!kengura || !stabdziai || !vairas);