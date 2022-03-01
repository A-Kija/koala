const flat = {};

flat.color = 'pink';

flat.hello = function() {
    console.log('Hello');
}

flat.whatColor = function() {
    console.log(this.color);
}

flat.whatColor();