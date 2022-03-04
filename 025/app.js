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