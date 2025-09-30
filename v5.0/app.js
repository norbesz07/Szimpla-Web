function showMenu(){
    const nav = document.querySelector('nav');
    const headerContainer = document.querySelector('.header-container');

    nav.classList.add("open"); // animáltan láthatóvá válik
    headerContainer.classList.add("menu-open");
    document.body.style.overflow = "hidden";
    document.getElementById('logo').style.opacity = "0";
}


function hideMenu(){
    const nav = document.querySelector('nav');
    const headerContainer = document.querySelector('.header-container');
    nav.classList.remove("open");
    document.getElementById('logo').style.opacity = "1";
    headerContainer.classList.remove("menu-open"); // menü full-vh állapot törlése

    // ⬇ visszaállítás a scroll szerinti állapotra
    if (window.scrollY > document.querySelector('header').offsetHeight - 10) {
        headerContainer.classList.add('scrolled');
    } else {
        headerContainer.classList.remove('scrolled');
    }

    const hamIcon = document.getElementById('hamIcon');
    hamIcon.style.display = "block";
    document.body.style.overflow = "scroll";
}


function setup(){
    hideMenu();
    window.addEventListener('scroll', function () {
        const headerContainer = document.querySelector('.header-container');
        if (window.scrollY > document.querySelector('header').offsetHeight - 10) {
            headerContainer.classList.add('scrolled');
        } else {
            headerContainer.classList.remove('scrolled');
        }
    });
}
