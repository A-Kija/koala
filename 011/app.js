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

console.log(_3X3);