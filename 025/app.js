const i = document.querySelector('input');
const b = document.querySelector('button');


b.addEventListener('click', () => {
    console.log(i.value);
});

class Troleibusas {

    constructor() {
        this.keleiviuSkaicius = 0;
    }

    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius += keleiviuSkaicius;
    }

    islipa(keleiviuSkaicius) {
        this.keleiviuSkaicius = Math.max(0, this.keleiviuSkaicius - keleiviuSkaicius);
    }

    vaziuoja() {
        console.log(`Šiuo metu troleibus važiuoja
         ${this.keleiviuSkaicius} keleiviai`);
    }
}

const nr6 = new Troleibusas();

nr6.ilipa(6);
nr6.vaziuoja();
nr6.ilipa(6);
nr6.islipa(10);
nr6.vaziuoja();
nr6.islipa(10);
nr6.vaziuoja();


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