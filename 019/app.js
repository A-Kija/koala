function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const h1 = document.querySelector('h1');

// const span = '<span>Barsukas</span>';
// h1.innerHTML = span; // labai labai lėta


// 1. sukuriam elementą
const span = document.createElement('span');

// 2. sukuriam tekstą
const text = document.createTextNode('Barsukas');

// 3. teksto dėjimas į elementą
span.appendChild(text);

// 4. patalpinam elemetntą į matomą dokumento dalį
h1.appendChild(span);


const section = document.querySelector('section');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    // 1. sukuriam elementą
    const p = document.createElement('p');

    // 2. sukuriam tekstą
    const text = document.createTextNode(rand(1, 5));

    // 3. teksto dėjimas į elementą
    p.appendChild(text);

    // 4. patalpinam elemetntą į matomą dokumento dalį
    section.appendChild(p);
});



const div = document.querySelector('.hello');
const inp = document.querySelector('input');
let i = 0;

inp.addEventListener('click', () => {
    // 1. sukuriam elementą
    const p = document.createElement('span');

    // 2. sukuriam tekstą
    const text = document.createTextNode(' hello ' + ++i);

    // 3. teksto dėjimas į elementą
    p.appendChild(text);

    // 4. patalpinam elemetntą į matomą dokumento dalį
    div.appendChild(p);
});

const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];

const cars = [
    { maker: 'Volvo', color: 'blue' },
    { maker: 'MB', color: 'yellow' },
    { maker: 'Opel', color: 'pink' },
    { maker: 'Volvo', color: 'orange' },
    { maker: 'Audi', color: 'blue' },
    { maker: 'Ferrari', color: 'red' },
    { maker: 'MB', color: 'gray' },
    { maker: 'Scania', color: 'yellow' },
    { maker: 'Kamaz', color: 'orange' },
    { maker: 'Saab', color: 'brown' }
];


const cars2 = [
    ['Volvo', 'blue', 55],
    ['MB', 'yellow', 0],
    ['Opel', 'pink', 11],
    ['Volvo', 'orange', 78],
    ['Audi', 'blue', 0],
    ['Ferrari', 'red', 99],
    ['MB', 'gray', 20],
    ['Scania', 'yellow', 78],
    ['Kamaz', 'orange', 98],
    ['Saab', 'brown', 0]
];


const catsDiv = document.querySelector('.cats');
cats.forEach(cat => {
    const p = document.createElement('div');
    const text = document.createTextNode(cat);
    p.appendChild(text);
    catsDiv.appendChild(p);
});



// const carsDiv = document.querySelector('.cars');
// cars.forEach(car => {
//     const p = document.createElement('div');
//     p.style.color = car.color;
//     const text = document.createTextNode(car.maker);
//     p.appendChild(text);
//     carsDiv.appendChild(p);
// });


const carsDiv = document.querySelector('.cars');
cars2.forEach(car => {
    if (car[2] != 0) {
        const p = document.createElement('div');
        p.style.color = car[1];
        const text = document.createTextNode(car[0]);
        p.appendChild(text);
        carsDiv.appendChild(p);
    }
});