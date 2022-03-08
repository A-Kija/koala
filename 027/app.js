const products = ['Dviratis', 'Triratis', 'Žvakidė', 'Stalas', 'Kėdė', 'Knygų lentyna', 'Paveikslas su rėmu', 'Veidrodis', 'Keturių vietų palapinė', 'Pripučiama valtis', 'Meškerė karosams gaudyti', 'Planšetė', 'Pastatoma lempa', 'Vazonas', 'Baterijų pakrovėjas', 'Pagalvių komplektas', 'Oro drėkintuvas', 'Oro sausintuvas', 'Kavinukas elektrinis', 'Kilimas 2 X 3 metrų', 'Kilimėlis kojoms valyti', 'Užuolaidos', 'Vėjo malūnas', 'Dažai sienoms', 'Dažai luboms', 'Medinė dėžė'];

const render = m => {
    let html = '';
    m.forEach(p => {
        html += `<li>${p}</li>`;
    });
    return html;
}

const sortArray = (m, d) => {
    m.sort(function(a, b) {
        if (a < b) {
            return -1 * d;
        }
        if (a > b) {
            return 1 * d;
        }
        return 0;
    });
}

const ul = document.querySelector('ul');
const sortButton = document.querySelector('#sort');

sortButton.addEventListener('click', () => {
    let direction = parseInt(sortButton.dataset.sortAs);
    sortArray(products, direction);
    direction = direction * -1;
    sortButton.dataset.sortAs = direction;
    ul.innerHTML = render(products);
})


ul.innerHTML = render(products);


const map1 = new Map();

map1.set('color3', 'yellow');
map1.set('color1', 'blue');
map1.set('color2', 'red');

const arr1 = [...map1];

arr1.sort();

map1.clear();

arr1.forEach(e => map1.set(e[0], e[1]));

console.log(arr1);

// map1.delete('animal');

// console.log(map1.has('animal'));
// console.log(map1.has('car'));

// console.log(map1.get('animal'));

console.log(map1);

console.log('----------');

map1.forEach(a => console.log(a));


class PirkiniuKrepselis {

    constructor() {
        this.turinys = new Map();
    }

    idetiSureli(kiekis) {
        this.ideti('sureliai', kiekis);
    }
    idetiPieno(kiekis) {
        this.ideti('pienas', kiekis);
    }
    idetiDuonos(kiekis) {
        this.ideti('duona', kiekis);
    }

    ideti(key, kiekis) {
        if (this.turinys.has(key)) {
            kiekis += this.turinys.get(key);
        }
        this.turinys.set(key, kiekis);
    }

    krepselioTurinys() {
        console.log(this.turinys);
    }

}

const K = new PirkiniuKrepselis();

K.idetiDuonos(5);
K.idetiDuonos(5);
K.idetiDuonos(5);
K.idetiSureli(1);

K.krepselioTurinys();