const wrapper = document.querySelector('.wrapper'),
 loginLink = document.querySelector('.login-link'),
 rgisterLink = document.querySelector('.register-link'),
 btnlogin = document.querySelector('.btnlogin-popup'),
 iconclose = document.querySelector('.icon-close');

rgisterLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnlogin.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconclose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

