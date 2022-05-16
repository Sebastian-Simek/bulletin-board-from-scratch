const loginBtn = document.getElementById('login');
const createBtn = document.getElementById('create');

loginBtn.addEventListener('click', () => {
    location.replace('./login-page');
});

createBtn.addEventListener('click', () => {
    location.replace('./create-page');
});