class Animal {

    constructor(n, t, w, id) {
        this.name = n;
        this.type = t;
        this.weight = w;
        this.id = typeof id == 'undefined' ? this.getId() : id;
    }

    getId() {
        let id = localStorage.getItem('vetId');
        if (id === null) {
            localStorage.setItem('vetId', 1);
            return 1;
        }
        id = parseInt(id);
        id++;
        localStorage.setItem('vetId', id);
        return id;
    }
}


class Storage {

    constructor(k) {
        this.key = k;
        this.data = this.read();
    }

    read() {
        let data = localStorage.getItem(this.key);
        if (data === null) {
            localStorage.setItem(this.key, JSON.stringify([]));
            return [];
        }
        return JSON.parse(data);
    }

    write() {
        localStorage.setItem(this.key, JSON.stringify(this.data));
    }

    create(obj) {
        this.data.push(obj);
        this.write();
    }

}


const storage = new Storage('vetData');

const elements = {
    newAnimalName: document.querySelector('#new-animal-name'),
    newAnimalType: document.querySelector('#new-animal-type'),
    newAnimalWeight: document.querySelector('#new-animal-weight'),
    newAnimal: document.querySelector('#new-animal')
};

elements.newAnimal.addEventListener('click', () => {
    const animal = new Animal(
        newAnimalName.value,
        newAnimalType.value,
        newAnimalWeight.value,
    );
    storage.create(animal);
})