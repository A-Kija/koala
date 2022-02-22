const cat = document.querySelector('div');
const dog = document.querySelector('div + div');
const racoon = document.querySelector('div + div + div');


cat.style.color = 'blue';
dog.style.color = 'brown';
racoon.style.color = 'red';


setInterval(() => {
    if (racoon.style.visibility == 'visible') {
        racoon.style.visibility = 'hidden';
    } else {
        racoon.style.visibility = 'visible';
    }
}, 300);