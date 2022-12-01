function burgerUp() {
    let burgerMenu = document.querySelector('.burgerMenu');
    let burgerDiv = burgerMenu.querySelectorAll('div');

    burgerDiv[0].style.transform = "rotate(0) translateY(0)";
    burgerDiv[0].style.backgroundColor = "black";
    burgerDiv[1].style.display = "block";
    burgerDiv[2].style.transform = "rotate(0) translateY(0)";
    burgerDiv[2].style.backgroundColor = "black";

    document.querySelector('body').style.overflow = "auto";

    document.querySelector('.ru-eng-hidden').style.display = "none";

    $('.hiddenMenu').slideUp(300);

    burgerMenu.classList.remove('activeMenu');
}