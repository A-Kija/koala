'use strict';

function pasisveikinimas(par2, par1) {
    console.log(par1, ', aš ', par2);
}

console.log('Startas');

let v = 'Jonas'

pasisveikinimas(v, 'Hello');
console.log('---------------');


pasisveikinimas('Murka', 'Ciao');
console.log('---------------');


console.log('Finišas');

const dviejuSkaiciuSuma = function(a, b) {
    let suma = a + b;
    console.log(suma);
}

// const k = [dviejuSkaiciuSuma];

// console.log(typeof dviejuSkaiciuSuma);

dviejuSkaiciuSuma(5, 5);
dviejuSkaiciuSuma(11, 12);

// k[0](4, 6);



const linija = function(m = '-') {
    let X10 = '';
    for (let i = 0; i < 10; i++) {
        X10 = X10 + m;
    }
    return X10;
}

// linija();
// linija();
// linija();
// linija();
// linija('*');

const lin = linija('=^_^= ');

console.log(lin);

const calc = function(a, b, z) {
    if (z == '+') {
        return a + b;
    }
    return a * b;
}

console.log(calc(1, 2, '+'));
console.log(calc(1, 2, '*'));