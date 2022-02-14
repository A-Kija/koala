'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const BitGirls = ['Brigita', 'Juste', 'Deimante'];

for (let i = 0; i < BitGirls.length; i++) {
    const girls = BitGirls[i];

    for (let k = 0; k < girls.length; k++) {
        console.log(girls[k]);
    }

    console.log('-----------');

}


const bigHouse = [
    ['Tomas', 'Sigute'],
    ['Bebras', 'Bronius'],
    ['Aiste', 'X'],
];


for (let i = 0; i < bigHouse.length; i++) {
    let store = bigHouse[i];

    for (let k = 0; k < store.length; k++) {
        console.log(store[k]);
    }
}


const _3X3 = [];


for (let i = 0; i < 3; i++) {

    const _3 = [];
    for (let k = 0; k < 3; k++) {
        _3.push('A');
    }

    _3X3.push(_3);

}




const XO = [];


for (let i = 0; i < 3; i++) {

    const _3 = [];
    for (let k = 0; k < 3; k++) {
        _3.push(rand(0, 1) ? 'X' : 'O');
    }

    XO.push(_3);

}

console.table(XO);

if ((XO[1][1] == XO[0][0] && XO[1][1] == XO[2][2]) ||
    (XO[1][1] == XO[2][0] && XO[1][1] == XO[0][2])) {
    console.log('Laimėjo', XO[1][1]);
} else {
    console.log('Niekas nelaimėjo');
}

_3X3[rand(0, 2)][rand(0, 2)] = 'Nauseda';

console.table(_3X3);