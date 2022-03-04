const i = document.querySelector('input');
const b = document.querySelector('button');


b.addEventListener('click', () => {
    console.log(i.value);
});

class Troleibusas {

    static visiKeleiviai = 0;

    static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
        this.visiKeleiviai += keleiviuSkaicius;
    }

    constructor() {
        this.keleiviuSkaicius = 0;
    }

    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius += keleiviuSkaicius;
        Troleibusas.bendrasKeleiviuSkaicius(keleiviuSkaicius);
    }

    islipa(keleiviuSkaicius) {
        if (keleiviuSkaicius > this.keleiviuSkaicius) {
            Troleibusas.bendrasKeleiviuSkaicius(-this.keleiviuSkaicius);
            this.keleiviuSkaicius = 0;
        } else {
            this.keleiviuSkaicius -= keleiviuSkaicius;
            // Troleibusas.bendrasKeleiviuSkaicius(-keleiviuSkaicius);

            this.constructor.bendrasKeleiviuSkaicius(-keleiviuSkaicius);
            // this.constructor nestatiniam metode yra klases atitikmuo
        }

        // this.keleiviuSkaicius = Math.max(0, this.keleiviuSkaicius - keleiviuSkaicius);
        // Troleibusas.bendrasKeleiviuSkaicius(-keleiviuSkaicius);
    }

    vaziuoja() {
        console.log(`Šiuo metu troleibus važiuoja
         ${this.keleiviuSkaicius} keleiviai`);
    }

    keleiviuSkaiciusVisuoseTroleibusuose() {
        console.log(`Šiuo metu visais troleibusais važiuoja
        ${Troleibusas.visiKeleiviai} keleiviai`);
    }
}

const nr6 = new Troleibusas();
const nr8 = new Troleibusas();

nr6.ilipa(5);
nr6.ilipa(5);
nr8.ilipa(10);
nr8.islipa(50);
nr6.keleiviuSkaiciusVisuoseTroleibusuose();
// nr6.islipa(10);
// nr6.vaziuoja();




class Zuikis {

    static visoMorku = 0;
    static visoKopustu = 0;

    static skaiciuotiVisusKopustus(kiek) {
        this.visoKopustu += kiek; // this -> i klase
        Zuikis.visoKopustu += kiek;
    }

    constructor() {
        this.morkos = 0;
        this.kopustai = 0;
    }

    duotiMorku(kiek) {
        Zuikis.visoMorku = Zuikis.visoMorku + kiek;
        this.morkos = this.morkos + kiek;
    }

    duotiKopustu(kiek) {
        Zuikis.skaiciuotiVisusKopustus(kiek);
        this.kopustai = this.kopustai + kiek; // this -> i objekta
    }

}



const z1 = new Zuikis();
const z2 = new Zuikis();

z2.duotiMorku(5);

z1.duotiKopustu(8);

console.log(z1.morkos, z2.morkos);

const z3 = new Zuikis();

z3.duotiMorku(10);


console.log(Zuikis.visoMorku, Zuikis.visoKopustu);



class Stikline {

    constructor(t) {
        this.turis = t;
        this.kiekis = 0;
    }

    ipilti(kiekis) {
        this.kiekis = Math.min(this.turis, this.kiekis + kiekis);
        return this;
    }

    ispilti() {
        let k = this.kiekis;
        this.kiekis = 0;
        return k;
    }

    stiklinejeYra() {
        console.log(`Stiklinėje ${this.turis} ml talpos
         dabar yra ${this.kiekis} ml`);
    }

}

const s200 = new Stikline(200);
const s150 = new Stikline(150);
const s100 = new Stikline(100);



s200.ipilti(200);

s150.ipilti(s200.ispilti());

s100.ipilti(s150.ispilti());

/*
s100.ipilti(
    s150.ipilti(
        s200.ipilti(200).ispilti()
        ).ispilti()
    );
*/

s200.stiklinejeYra();
s150.stiklinejeYra();
s100.stiklinejeYra();


class Grybas {

    static visiGrybai = [];

    constructor() {
        this.valgomas = !this.rand(0, 1);
        this.sukirmijes = !this.rand(0, 1);
        this.svoris = this.rand(5, 45);
        this.constructor.visiGrybai.push(this); // this.constructor === Grybas
    }

    rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}

const g1 = new Grybas();
const g2 = new Grybas();

// console.log(g1, g2);

console.log(Grybas.visiGrybai);