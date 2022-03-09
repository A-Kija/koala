const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const postId = document.querySelector('#post-id');
const getPost = document.querySelector('#get-post');

fetch('https://jsonplaceholder.typicode.com/posts/7')
    .then(response => response.json()) // JSON Parse
    .then(data => {
        console.log(data);
        h1.innerText = data.title;
        p.innerText = data.body;
    });


getPost.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + postId.value)
        .then(response => response.json()) // JSON Parse
        .then(data => {
            console.log(data);
            h1.innerText = data.title;
            p.innerText = data.body;
        });
});


fetch('https://picsum.photos/v2/list')
    .then(response => response.json())
    .then(data => {
        const ul = document.createElement('ul');
        data.forEach(element => {
            const li = document.createElement('li');
            const author = document.createTextNode(element.author);
            li.appendChild(author);
            ul.appendChild(li);
        });

        // let html = '';
        // data.forEach(element => {
        //     html = html + `<li>${element.author}</li>`;
        // });
        // ul.innerHTML = html;
        document.querySelector('body').appendChild(ul);
    });