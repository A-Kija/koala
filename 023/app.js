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
        this.data.unshift(obj);
        this.write();
    }

}


const storage = new Storage('vetData');

const elements = {
    newAnimalName: document.querySelector('#new-animal-name'),
    newAnimalType: document.querySelector('#new-animal-type'),
    newAnimalWeight: document.querySelector('#new-animal-weight'),
    newAnimal: document.querySelector('#new-animal'),
    animalsList: document.querySelector('#animals-list')
};

elements.newAnimal.addEventListener('click', () => {
    const animal = new Animal(
        elements.newAnimalName.value,
        elements.newAnimalType.value,
        elements.newAnimalWeight.value,
    );
    storage.create(animal);
    renderList();
});


const renderList = () => {

    const ul = document.createElement('ul');
    ul.classList.add('list-group'); // prideda klase

    storage.data.forEach(animal => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');

        const div1 = document.createElement('div');
        div1.classList.add('content');

        const h6 = document.createElement('h6');
        h6.appendChild(document.createTextNode(animal.name || 'no name'));
        div1.appendChild(h6);
        const span = document.createElement('span');
        if (animal.type == 'c') {
            span.classList.add('cat');
        } else {
            span.classList.add('dog');
        }
        div1.appendChild(span);
        const i = document.createElement('i');
        i.appendChild(document.createTextNode((animal.weight || 0) + ' kg'));
        div1.appendChild(i);
        li.appendChild(div1);

        const div2 = document.createElement('div');
        div2.classList.add('buttons');
        const buttonDel = document.createElement('button');
        buttonDel.classList.add('btn', 'btn-outline-danger', 'my-2', 'my-sm-0');
        buttonDel.appendChild(document.createTextNode('Trinti'));
        div2.appendChild(buttonDel);




        li.appendChild(div2);

        ul.appendChild(li);
    });
    elements.animalsList.innerHTML = '';
    elements.animalsList.appendChild(ul);
}

renderList();