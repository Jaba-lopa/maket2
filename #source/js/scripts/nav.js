window.addEventListener('click', function(event) {
    if (event.target.hasAttribute('data-nav')) {
        document.querySelectorAll('[data-nav]').forEach((item) => item.style.color = "#828282");
        event.target.style.color = "black";
        try {
            const elScroll = event.target.innerText.toLowerCase();
            document.querySelector(`.section-${elScroll}`).scrollIntoView({block: 'start', behavior: 'smooth'});
        } catch {
            document.querySelector(`.section-aboutMe`).scrollIntoView({block: 'start', behavior: 'smooth'});
        }
        burgerUp();
    }
})