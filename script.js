function functio(small){
    var full = document.getElementById("imagebox")
    full.src = small.src
}

const wrapper = document.querySelector('.wrapper');
const loginlLink= document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup= document.querySelector('.btnLogin-popup');

const iconClose= document.querySelector('.icon-close');
registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginlLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});


btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});




const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 3000); 







