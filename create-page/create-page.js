import { authUser } from '../fetch-utils.js';

const homeBtn = document.getElementById('home');

authUser();

homeBtn.addEventListener('click', () => {
    window.location.href = '/';
});
