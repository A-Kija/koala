function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log('----------------- 1 ----------------');

const h21 = document.querySelector('h2');
const h22 = document.querySelector('h2 + h2');
const b1 = document.querySelector('#b1');

b1.addEventListener('click', () => {
    const d1 = rand(1, 6);
    const d2 = rand(1, 6);

    h21.innerText = d1;
    h22.innerText = d2;

    if (d1 == d2) {
        h21.style.color = 'red';
        h22.style.color = 'red';
    } else {
        h21.style.color = 'black';
        h22.style.color = 'black';
    }

});

console.log('----------------- 2 ----------------');

const h32 = document.querySelector('#_2');
const b2 = document.querySelector('#b2');
const arr2 = [];
h32.innerText = 0;

b2.addEventListener('click', () => {
    const d1 = rand(1, 10);
    arr2.push(d1);
    const sum = parseInt(h32.innerText) + d1;
    h32.innerText = sum;
    console.log(arr2);
});

console.log('----------------- 3 ----------------');

const africa = ['Zebras', 'Liūtas', '', 'Raganosis', '', 'Raganosis', 'Begemotas'];

const ul3 = document.querySelector('#africa');
africa.forEach(animal => {
    if (animal) {
        const p = document.createElement('li');
        const text = document.createTextNode(animal);
        p.appendChild(text);
        ul3.appendChild(p);
    }
});

console.log('----------------- 4 ----------------');

const i1 = document.querySelector('#i1');
const i2 = document.querySelector('#i2');
const h5 = document.querySelector('h5');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');

plus.addEventListener('click', () => {
    const result = parseInt(i1.value) + parseInt(i2.value);
    h5.innerText = result;
});

minus.addEventListener('click', () => {
    const result = i1.value - i2.value;
    h5.innerText = result;
});

console.log('----------------- 5 ----------------');

const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];
const ul5 = document.querySelector('#australia');
let html = '';
australia.forEach(animal => {
    if (animal != 'Digo') {
        html = html + '<li>' + animal + '</li>';
    } else {
        html = html + '<li style="background:blue;">' + animal + '</li>';
    }
});

ul5.innerHTML = html;


// const animal = 'Bebras';

// localStorage.setItem('forestAnimal', animal); // idedame i saugykla

localStorage.removeItem('forestAnimal');

if (localStorage.getItem('forestAnimal') === null) {
    console.log('Nieko nėra');
} else {
    console.log(localStorage.getItem('forestAnimal'));
}






const h6 = document.querySelector('h6');
const h6Button = document.querySelector('.h6');

if (localStorage.getItem('australiaAnimal') !== null) {
    h6.innerText = localStorage.getItem('australiaAnimal');
} else {
    h6.innerText = 'Nop nop nop';
}


h6Button.addEventListener('click', () => {
    const australiaRand = australia[rand(0, australia.length - 1)];
    h6.innerText = australiaRand;
    localStorage.setItem('australiaAnimal', australiaRand);
});

const australia2 = { la: 'lala', bla: { ku: 'kuku', bu: 87 } };

console.log(australia2);

localStorage.setItem('try', australia2);
localStorage.setItem('try2', JSON.stringify(australia2));

console.log(localStorage.getItem('try'));
console.log(JSON.parse(localStorage.getItem('try2')));