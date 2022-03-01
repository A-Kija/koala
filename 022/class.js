class h2 {
    constructor(t) {
        this.h2 = document.createElement('h2');
        const text = document.createTextNode(t);
        this.h2.appendChild(text);
        document.querySelector('body').appendChild(this.h2);
    }

    color(c) {
        this.h2.style.color = c;
    }
}