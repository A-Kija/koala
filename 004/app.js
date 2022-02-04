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

console.log('------------------- 1 ------------------');
let kauliukas1 = rand(1, 6);
let kauliukas2 = rand(1, 6);

if (kauliukas1 + kauliukas2 > 8) {
    console.log('Laimėjote', kauliukas1, kauliukas2);
} else {
    console.log('Pralaimėjote', kauliukas1, kauliukas2);
}

console.log('------------------- 2 ------------------');
let pilkis = rand(3, 6);
let murklys = rand(3, 6);

console.log('Pilkis:', pilkis, 'Murklys:', murklys);

if (pilkis < murklys) {
    console.log('Pilkis lengvesnis');
} else if (pilkis > murklys) {
    console.log('Murklys lengvesnis');
} else {
    console.log('Vienodi');
}

console.log('------------------- 3 ------------------');

let katinukai = rand(0, 30);
let karves = rand(0, 30);

console.log('katinukai:', katinukai, 'karves:', karves);

if (katinukai > 15 || karves > 15) {
    console.log('Netelpa');
} else {
    console.log('Telpa');
}

console.log('------------------- 4 ------------------');

let antanas = rand(1, 6);
console.log('Antanas:', antanas);

if (antanas == 1 || antanas == 5) {
    console.log('Pirk Televizorių');
} else if (antanas == 3 || antanas == 4) {
    console.log('Pirk Skalbimo mašiną');
} else {
    console.log('Pirk Šaldytuvas');
}

console.log('------------------- 5 ------------------');

let sk1 = rand(1, 7);
let sk2 = rand(1, 7);
let sk3 = rand(1, 7);

console.log(sk1, sk2, sk3);

if (sk1 <= sk2 && sk1 <= sk3) {
    if (sk2 <= sk3) {
        console.log(sk1, sk2, sk3);
    } else {
        console.log(sk1, sk3, sk2);
    }
} else if (sk2 <= sk1 && sk2 <= sk3) {
    if (sk1 <= sk3) {
        console.log(sk2, sk1, sk3);
    } else {
        console.log(sk2, sk3, sk1);
    }
} else {
    if (sk1 <= sk2) {
        console.log(sk3, sk1, sk2);
    } else {
        console.log(sk3, sk2, sk1);
    }
}