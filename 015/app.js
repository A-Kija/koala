function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė'];
const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];

// console.log('******************* 1 ******************');
// bitGirls.unshift('Nausėda');
// console.log(bitGirls);

// console.log('******************* 2 ******************');

// const bitCats = [];

// cats.forEach(cat => {
//     const oneCat = [];
//     oneCat.push(cat);
//     oneCat.push(rand(0, 1) ? 'Storas' : 'Normalus');
//     bitCats.push(oneCat);
// });
// console.table(bitCats);

// console.log('******************* 3 ******************');

// let storas = 0;
// let normalus = 0;

// bitCats.forEach(cat => {
//     if (cat[1] == 'Storas') {
//         storas++;
//     } else if (cat[1] == 'Normalus') {
//         normalus++;
//     }
// });

// console.log('Stori:', storas, 'Normalūs:', normalus);


// console.log('******************* 4 ******************');

// bitCats.sort((a, b) => {
//     if (a[0][1] > b[0][1]) {
//         return 1;
//     }
//     if (a[0][1] < b[0][1]) {
//         return -1;
//     }
//     return 0;
// });

// console.table(bitCats);

// console.log('******************* 5 ******************');

// const happyCats = [];

// const bitCatsCopy = bitCats.slice(); // Kopijavimas

// bitGirls.forEach(girl => {
//     const catName = (girl == 'Nausėda') ? 'Bebras' : bitCatsCopy.shift()[0];
//     happyCats.push([girl, catName]);
// });

// console.table(happyCats);

// console.log(bitCats);


const house = {};

house.people = ['Nausėda', 'Bebras', 'Antanas'];
house.tube = [1, 2];
house.address = 'Guobų g. 13';


// console.table(house);
// console.log(house.tube);

const catOwner = {};

catOwner.girl = bitGirls[rand(0, bitGirls.length - 1)];
catOwner.cat = cats[rand(0, cats.length - 1)];

catOwner.pills = {};

catOwner.pills.red = !rand(0, 1);
catOwner.pills.blue = !rand(0, 1);

console.log(catOwner);



const petClinic = [];

for (let i = 0; i < 22; i++) {

    petClinic[i] = {};
    petClinic[i].girl = bitGirls[rand(0, bitGirls.length - 1)];
    petClinic[i].cat = cats[rand(0, cats.length - 1)];

    petClinic[i].pills = {};

    petClinic[i].pills.red = !rand(0, 1);
    petClinic[i].pills.blue = !rand(0, 1);

}

petClinic.sort((a, b) => {
    if (a.girl > b.girl) {
        return 1;
    }
    if (a.girl < b.girl) {
        return -1;
    }
    return 0;
});

console.log(petClinic);

let blueCount = 0;

// petClinic.forEach(o => o.pills.blue ? blueCount++ : 'tik tam, kad nebutu tuscia')

petClinic.forEach(o => {
    if (o.pills.blue) {
        blueCount++;
    }
});

console.log(blueCount);