// const flat = {}; // objekto kūrimas

// flat.color = 'pink'; // savybės pridėjimas
// flat.count = 45;

// flat.whatColor = function() { // savybės spausdinimo metodo prodėjimas
//     console.log(this.color);
// }

// flat.count10 = function() {
//     console.log(this.count * 10);
// }




class myFlat {
    constructor() {
        this.color = 'pink';
        this.count = 45;
    }
    whatColor() {
        console.log(this.color);
    };
    count10() {
        console.log(this.count * 10);
    };
}

const flat = new myFlat(); // objekto kūrimas


flat.whatColor(); // metodo naudojimas
flat.count10();