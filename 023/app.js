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


console.log(new Animal('MurN', 'c', 5));
console.log(new Animal('MurS', 'c', 5, 78));