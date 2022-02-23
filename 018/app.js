function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const button1 = document.querySelector('.b1');



button1.addEventListener('click', () => {
    console.log('PRESS ME CLICKED');
});

button1.addEventListener('mouseenter', () => {
    console.log('MOUSE IS OVER PRESS ME');
});

button1.addEventListener('mouseleave', () => {
    console.log('MOUSE GONE');
});