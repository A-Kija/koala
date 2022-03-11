export const gameBoard = (id) => {
    const square = document.createElement('div');
    square.classList.add('square');
    square.id = id;
    const bins = [];
    for (let i = 0; i < 25; i++) {
        bins[i] = document.createElement('div');
        bins[i].classList.add('bin');
        bins[i].dataset['bin-' + i];
        square.appendChild(bins[i]);
    }
    document.querySelector('body').appendChild(square);
    return bins;
}

export const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const array25 = () => {
    const arr25 = new Set();
    do {
        arr25.add(rand(1, 25));
    } while (arr25.size < 25);
    return [...arr25];
}


export const gamePanel = () => {
    const panel = document.createElement('div');
    panel.classList.add('panel');
    const timer = document.createElement('h3');
    const start = document.createElement('button');
    start.appendChild(document.createTextNode('start'));
    const reset = document.createElement('button');
    reset.appendChild(document.createTextNode('reset'));
    panel.appendChild(start);
    panel.appendChild(reset);
    panel.appendChild(timer);
    document.querySelector('body').appendChild(panel);
    return { timer: timer, start: start, reset: reset };
}