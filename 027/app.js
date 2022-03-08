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
    console.log(direction);
    sortArray(products, direction);
    direction = direction * -1;
    sortButton.dataset.sortAs = direction;
    ul.innerHTML = render(products);
})


ul.innerHTML = render(products);