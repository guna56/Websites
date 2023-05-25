
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', ()=> {
    container.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    container.classList.remove('active');
});