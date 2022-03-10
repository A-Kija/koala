export const gameBord = (id) => {
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

export const array25 = () => {
    const arr = [];
    for (let i = 1; i <= 25; i++) {
        arr.push(i);
    }
    const arrShuffle = [];
    for (let i = 1; i <= 25; i++) {
        arrarrShuffle.push(i);
    }

}