function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const button1 = document.querySelector('.b1');




button1.addEventListener('click', () => {
    console.log('PRESS ME CLICKED');
    // button1.style.background = 'green';
    // button1.style.padding = '100px';
    // button1.style.border = '13px dotted black';
    // button1.style.borderColor = 'pink';
});

button1.addEventListener('mouseenter', () => {
    console.log('MOUSE IS OVER PRESS ME');
});

button1.addEventListener('mouseleave', () => {
    console.log('MOUSE GONE');
});

const button2 = document.querySelector('.b2');

button2.addEventListener('click', () => {
    const b = document.querySelector('body');
    if (b.style.background == 'red') {
        b.style.background = 'white';
    } else {
        b.style.background = 'red';
    }
});




document.querySelector('.b3').addEventListener('click', () => {

    const r = rand(5, 55);
    const h1 = document.querySelector('h1');
    h1.innerText = r;

});

const parent = document.querySelector('.parent');
const child = document.querySelector('.child');


parent.addEventListener('click', () => {
    // e.stopPropagation();
    console.log('Parent CLICK');
});

child.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log(e.target);

    e.target.style.background = 'blue';

    console.log('Child CLICK');
});


document.querySelector('body').addEventListener('click', () => {
    console.log('Body CLICK');
});


document.querySelector('a').addEventListener('click', e => {
    e.preventDefault();
    e.target.style.color = "green";
})


document.querySelector('.red-square').addEventListener('click', e => {
    // target duoda elementą
    console.log(e.target);
    console.log(document.querySelector('.red-square'));

    // burbuliavimo stabdymas
    e.stopPropagation();


    // defaulto stabdymas
    e.preventDefault();
})

// document.querySelectorAll('li').forEach(li => {
//     li.addEventListener('click', () => {
//         li.style.color = 'pink';
//     })
// });

// document.querySelectorAll('li').forEach(li => {
//     li.addEventListener('click', e => {
//         e.target.style.color = 'pink';
//         console.log(e.target.innerText);
//         e.stopPropagation();
//     })
// })


const clowns = [];

document.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', e => {
        e.target.style.color = 'pink';
        clowns.push(li.innerText);
        console.log(clowns);
        e.stopPropagation();
    })
});