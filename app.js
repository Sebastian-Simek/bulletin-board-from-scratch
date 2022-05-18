import { fetchPosts, logOut, getUser } from './fetch-utils.js';
import { renderPosts } from './render-utils.js';

const loginBtn = document.getElementById('login');
const createBtn = document.getElementById('create');
const logOutBtn = document.getElementById('logout');
const postListContainer = document.getElementById('display-div');
window.addEventListener('load', async () => {
    const user = await getUser();
    console.log(user);
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

