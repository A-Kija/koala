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

    // savybės
    constructor(c, d, avinai) {
        this.color = c;
        this.count = d;
        this.avinuSkaicius = avinai;
    }

    // metodai
    whatColor() {
        console.log(this.color);
    };

    count10() {
        console.log(this.count * 10);
    };

}

const flat = new myFlat('pink', 47, 88); // objekto kūrimas
flat.whatColor(); // metodo naudojimas
flat.count10();

const flat23 = new myFlat('green', 81, 109); // objekto kūrimas
flat23.whatColor(); // metodo naudojimas
flat23.count10();

console.log(flat, flat23);


class Kibiras1 {

    constructor() {
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni() {
        this.akmenuKiekis++;
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis = this.akmenuKiekis + kiekis;
    }

    kiekPririnktaAkmenu() {
        console.log('Pririnkta ' + this.akmenuKiekis + ' akmenų');
    }

}

const kibir1 = new Kibiras1();
const kibir2 = new Kibiras1();

kibir1.prideti1Akmeni();
kibir2.pridetiDaugAkmenu(15);
kibir2.prideti1Akmeni();
kibir2.prideti1Akmeni();
kibir2.prideti1Akmeni();

kibir1.kiekPririnktaAkmenu();
kibir2.kiekPririnktaAkmenu();