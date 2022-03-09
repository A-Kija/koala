const h1 = document.querySelector('h1');
const p = document.querySelector('p');

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        h1.innerText = data.title;
        p.innerText = data.body;
    });