const balls = [];

class ColorBall {

    constructor(color, number) {
        this.color = color;
        this.number = number;
        balls.push(this);
    }
}

const paint = () => {
    let html = '';
    balls.forEach(element => {
        html += `<div class="ball" style="background:${element.color};">${element.number}</div>`;
    });
    div.innerHTML = html;
}

const number = document.querySelector('[type=text]');
const color = document.querySelector('[type=color]');
const add = document.querySelector('#add');
const remove = document.querySelector('#remove');
const div = document.querySelector('div.balls');

add.addEventListener('click', () => {
    new ColorBall(color.value, number.value);
    paint();
});


remove.addEventListener('click', () => {
    balls.shift();
    paint();
});