function userList() {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayList(data))
}

function displayList(data) {

    const ul = document.getElementById('user-list');
    for (const user of data) {

        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }

}