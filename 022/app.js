const flat = {};

flat.color = 'pink';

flat.whatColor = function() {
    console.log(this.color);
}


flat.whatColor();