const btnMenu = document.querySelector('#btnMenu');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');


btnMenu.addEventListener('click', function() {
    if(header.classList.contains('open')){
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(elements) {
            elements.classList.remove('fade-in');
            elements.classList.add('fade-out');
        });
    }
    else {
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element) {
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
    }
});