const getId = () => {
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


console.log(getId());
console.log(getId());
console.log(getId());