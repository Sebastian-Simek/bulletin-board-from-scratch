import { fetchPosts, logOut, getUser, removePosts } from './fetch-utils.js';
import { renderPosts } from './render-utils.js';

const removeBtn = document.getElementById('remove');
const loginBtn = document.getElementById('login');
const createBtn = document.getElementById('create');
const postListContainer = document.getElementById('display-div');

window.addEventListener('load', async () => {
    const user = await getUser();
    if (user) {
        loginBtn.textContent = 'LOGOUT';
        loginBtn.addEventListener('click', async () => {
            await logOut();
        });
    } else {
        loginBtn.textContent = 'LOGIN';
        loginBtn.addEventListener('click', () => {
            location.replace('./login-page');
        });
    }
    removeBtn.addEventListener('click', () => {
        console.log('i clicked');
    });
    
});


createBtn.addEventListener('click', () => {
    location.replace('./create-page');
});


async function loadData() {
    const posts = await fetchPosts();
    for (let post of posts) {
        const postDiv = renderPosts(post);
        postListContainer.append(postDiv);
    }
}

loadData();

console.log(removePosts());