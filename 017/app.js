// Main
const cat = document.querySelector('div');
const dog = document.querySelector('div + div');
const racoon = document.querySelector('div + div + div');


cat.style.color = 'blue';
dog.style.color = 'brown';
racoon.style.color = 'red';


cat.addEventListener('click', () => {
    // cat
    cat.style.visibility = 'hidden';
    // cat end
});


setInterval(() => { // end main

    // Racoon
    if (racoon.style.visibility == 'visible') {
        racoon.style.visibility = 'hidden';
    } else {
        racoon.style.visibility = 'visible';
    }
    // racoon end

}, 300); // main

const clowns = document.querySelectorAll('li');

// clowns.style.color = 'pink'; nieko taip nebus

// for (let i = 0; i < clowns.length; i++) {
//     clowns[i].style.color = 'pink';
// }

clowns.forEach(c => c.style.color = 'pink');

// clowns.forEach((c) => {
//     c.style.color = 'pink'
// });


console.log(clowns);