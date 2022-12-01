$('.hiddenMenu').slideUp(0);

window.addEventListener('click', function(event) {
    if (event.target.closest('.burgerMenu')) {

        let burgerMenu = document.querySelector('.burgerMenu');
        let burgerDiv = burgerMenu.querySelectorAll('div');

        if (burgerMenu.classList.contains('activeMenu')) {
            
            burgerUp();

        } else {
            burgerDiv[0].style.transform = "rotate(45deg) translateY(5px)";
            burgerDiv[0].style.backgroundColor = "#828282";
            burgerDiv[1].style.display = "none";
            burgerDiv[2].style.transform = "rotate(-45deg) translateY(-5px)";
            burgerDiv[2].style.backgroundColor = "#828282";

            $('.hiddenMenu').slideDown(300);

            document.querySelector('body').style.overflow = "hidden";

            document.querySelector('.ru-eng-hidden').style.display = "block";

            burgerMenu.classList.add('activeMenu');
        }
    }
});