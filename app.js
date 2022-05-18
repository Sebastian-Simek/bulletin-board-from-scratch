import { fetchPosts, logOut, ifLoggedIn } from './fetch-utils.js';
import { renderPosts } from './render-utils.js';

const loginBtn = document.getElementById('login');
const createBtn = document.getElementById('create');
const logOutBtn = document.getElementById('logout');
const postListContainer = document.getElementById('display-div');


loginBtn.addEventListener('click', () => {
    location.replace('./login-page');
});

createBtn.addEventListener('click', () => {
    location.replace('./create-page');
});

logOutBtn.addEventListener('click', async () => {
    await logOut();
});

async function loadData() {
    const posts = await fetchPosts();
    for (let post of posts) {
        const postDiv = renderPosts(post);
        postListContainer.append(postDiv);
    }
}

loadData();

async function loadLogOut() {
    await ifLoggedIn();
}

loadLogOut();