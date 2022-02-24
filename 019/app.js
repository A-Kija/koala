function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const h1 = document.querySelector('h1');

// const span = '<span>Barsukas</span>';
// h1.innerHTML = span; // labai labai lėta


// sukuriam elementą
const span = document.createElement('span');

// sukuriam tekstą
const text = document.createTextNode('Barsukas');

// teksto dėjimas į elementą
span.appendChild(text);

// patalpinam elemetntą į matomą dokumento dalį
h1.appendChild(span);