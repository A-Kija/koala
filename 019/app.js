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