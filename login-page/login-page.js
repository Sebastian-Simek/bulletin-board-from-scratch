import { signUpUser, signInUser, ifLoggedIn, } from '../fetch-utils.js';
const newUser = document.getElementById('sign-up');
const oldUser = document.getElementById('sign-in');


newUser.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(newUser);
    const user = await signUpUser(data.get('email'), data.get('password'));
    if (user) {
        location.replace('../create-page');
    } 
});

oldUser.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(oldUser);
    const user = await signInUser(data.get('email'), data.get('password'));
    if (user) {
        location.replace('../create-page');
    }
});

ifLoggedIn();