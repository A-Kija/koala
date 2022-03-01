console.log(this);

const flat = {};

flat.color = 'pink';

flat.hello = function() {
    console.log('Hello');
}


flat.whatColor = function() {
    console.log(this.color);
    console.log(flat.color);
}


// flat.labas1 = function() {
//     console.log('labas 1', this);
// }


// flat.labas2 = () => {
//     console.log('labas 2', this);
// }


// console.log(flat);
flat.whatColor();


// flat.labas1();
// flat.labas2();


// function flatColor() {
//     console.log(flat.color);
// }