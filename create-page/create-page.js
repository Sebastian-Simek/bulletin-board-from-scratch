import { authUser, userPosts } from '../fetch-utils.js';

const homeBtn = document.getElementById('home');
const userInputForm = document.getElementById('user-inputs');

authUser();

homeBtn.addEventListener('click', () => {
    window.location.href = '/';
});

userInputForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(userInputForm);
    const newPost = {
        title: data.get('title'),
        description: data.get('description'),
        contact: data.get('contact'),
    };
    userInputForm.reset();
    await userPosts(newPost);
});
