function post() {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPost(data))
}

/*
1. get the container element where you want to add the new element
2. create child element
3.set innerText or innerHtml
4.appendChild
 */

function displayPost(posts) {
    const postContainer = document.getElementById('posts-container')
    for (const post of posts) {

        const postDiv = document.createElement('div');
        postDiv.innerHTML =
            `<h4>User-${post.userId}<h4>
            <h4>post:-${post.title}<h4>
            <h4>post description:${post.body}<h4>
            `;
        postContainer.appendChild(postDiv)
    }

}
post();