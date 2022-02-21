function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}




console.log(document.querySelector('div div'));

console.log(document.querySelector('.au-au'));

console.log(document.querySelector('div[name=mu-mu]'));

console.log(document.querySelector('div[type=rabit]'));

console.log(document.querySelector('div[type=rabit] + div'));


const cat = document.querySelector('h1');

cat.style.color = 'pink';

document.querySelector('.au-au').style.color = 'brown';

document.querySelector('.au-au').style.fontSize = '40px'; // font-size

// console.log(cat);

const cow = document.querySelector('div[name=mu-mu]');

cow.style.background = 'green';
cow.style.padding = '100px';
cow.style.border = '13px dotted black';
cow.style.borderColor = 'pink';

setInterval(() => {
    if (cow.style.background == 'green') {
        cow.style.background = 'pink';
    } else {
        cow.style.background = 'green';
    }
}, 1000);