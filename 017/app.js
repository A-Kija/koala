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

clowns.forEach((c, i) => c.style.color = 'pink');

// clowns.forEach((c) => {
//     c.style.color = 'pink'
// });

clowns.forEach((c, i) => {
    if (i % 2) {
        c.style.color = 'red';
        console.log(c.innerText);
    }
})


setInterval(() => { // end main
    clowns.forEach((c, i) => {
        if (i % 2) {
            if (c.style.visibility == 'visible') {
                c.style.visibility = 'hidden';
            } else {
                c.style.visibility = 'visible';
            }
        }
    })
}, 100);

const bigNames = [];

clowns.forEach(c => bigNames.push(c.innerText));

bigNames.sort((a, b) => {
    if (a > b) {
        return -1;
    }
    if (a < b) {
        return 1;
    }
    return 0;
})

// clowns.forEach((c) => {
//     bigNames.push(c)
// });


console.log(bigNames);

const day = document.querySelector('.day');

const dayHtml = '<h2>Big Day</h2>';

day.innerHTML = dayHtml;