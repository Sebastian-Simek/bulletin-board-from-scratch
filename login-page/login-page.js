import { signupUser } from '../fetch-utils.js';
const homeBtn = document.getElementById('home');
const newUser = document.getElementById('sign-up');

homeBtn.addEventListener('click', () => {
    location.replace('../');
});

newUser.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(newUser);
    const user = await signupUser(data.get('email'), data.get('password'));
    if (user) {
        location.replace('../create-page');
    } 
});