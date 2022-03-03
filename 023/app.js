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

    delete(id) {
        // this.data.forEach((animal, i) => {
        //     if (animal.id == id) {
        //         this.data.splice(i, 1);
        //     }
        // });
        const index = this.data.findIndex(animal => animal.id == id);
        this.data.splice(index, 1);
        this.write();
    }

    edit(obj) {
        this.data.forEach(animal => {
            if (animal.id == obj.id) {
                animal.name = obj.name;
                animal.type = obj.type;
                animal.weight = obj.weight;
            }
        });
        this.write();
    }
}

const storage = new Storage('vetData');

const elements = {
    newAnimalName: document.querySelector('#new-animal-name'),
    newAnimalType: document.querySelector('#new-animal-type'),
    newAnimalWeight: document.querySelector('#new-animal-weight'),
    newAnimal: document.querySelector('#new-animal'),
    editAnimal: document.querySelector('#edit-animal'),
    animalsList: document.querySelector('#animals-list'),
    editAnimalName: document.querySelector('#edit-animal-name'),
    editAnimalType: document.querySelector('#edit-animal-type'),
    editAnimalWeight: document.querySelector('#edit-animal-weight'),
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

        const buttonEdit = document.createElement('button');
        buttonEdit.classList.add('btn', 'btn-outline-success', 'my-2', 'my-sm-0', 'm-1');
        buttonEdit.appendChild(document.createTextNode('Redaguoti'));
        div2.appendChild(buttonEdit);
        buttonEdit.addEventListener('click', () => {
            showModal(animal);
        });

        const buttonDel = document.createElement('button');
        buttonDel.classList.add('btn', 'btn-outline-danger', 'my-2', 'my-sm-0', 'm-1');
        buttonDel.appendChild(document.createTextNode('Trinti'));
        div2.appendChild(buttonDel);
        buttonDel.addEventListener('click', () => {
            storage.delete(animal.id);
            renderList();
        });

        li.appendChild(div2);
        ul.appendChild(li);
    });
    elements.animalsList.innerHTML = '';
    elements.animalsList.appendChild(ul);
}

let modalId = 0;

const showModal = (animal) => {
    const modal = document.querySelector('.modal');
    modal.classList.add('show');
    modal.style.display = 'block';
    elements.editAnimalName.value = animal.name;
    elements.editAnimalType.value = animal.type;
    elements.editAnimalWeight.value = animal.weight;
    modalId = animal.id;
}

const hideModal = () => {
    const modal = document.querySelector('.modal');
    modal.classList.remove('show');
    modal.style.display = 'none';
    elements.editAnimalName.value = '';
    elements.editAnimalType.value = '';
    elements.editAnimalWeight.value = '';
    modalId = 0;
}

document.querySelectorAll('[data-dismiss=modal]').forEach(b => {
    b.addEventListener('click', () => {
        hideModal();
    });
});

elements.editAnimal.addEventListener('click', () => {
    const animal = new Animal(
        elements.editAnimalName.value,
        elements.editAnimalType.value,
        elements.editAnimalWeight.value,
        modalId
    );
    storage.edit(animal);
    hideModal();
    renderList();
})

renderList();