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