const backToTop = document.querySelector('#backTop');
const mobButton = document.querySelector('.mobile');
const navList = document.querySelector('nav');
const dontButton = document.querySelector('#doNot');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close');

backToTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
})

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector('header').style.fontSize = "12px";
        document.querySelector('header').style.height = "50px";
    } else {
        document.querySelector('header').style.backgroundColor = "transparent";
        document.querySelector('header').style.fontSize = "32px";
        document.querySelector('header').style.height = "100px";
    }
}

const toggleMenu = () => {
    navList.classList.toggle('responsive');
}

const toggleModal = () => {
    overlay.classList.toggle('visible');
}

dontButton.addEventListener('click', toggleModal)
closeBtn.addEventListener('click', toggleModal);
mobButton.addEventListener('click', toggleMenu);
