let menuIsOpen = true;
const menuIcon = document.querySelector("#menu-icon");
const menuTexto = document.querySelectorAll(".menu-texto");


menuIcon.addEventListener('click', function () {

    if (menuIsOpen) {
        menuIcon.src = "asset/image/arrow-right.png"
        menuIsOpen = false;
        menuTexto.forEach(m => {
            m.style.display = "none"
        });

    } else {
        menuIcon.src = "asset/image/arrow-left (1).png"
        menuIsOpen = true;
        menuTexto.forEach(m => {
            m.style.display = "inline"
        });
    }
});
