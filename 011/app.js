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