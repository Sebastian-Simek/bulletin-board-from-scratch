import { logOut } from './fetch-utils.js';

const loginBtn = document.getElementById('login');
const createBtn = document.getElementById('create');
const logOutBtn = document.getElementById('logout');


loginBtn.addEventListener('click', () => {
    location.replace('./login-page');
});

createBtn.addEventListener('click', () => {
    location.replace('./create-page');
});

logOutBtn.addEventListener('click', async () => {
    await logOut();
});
