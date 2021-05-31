// Mostrar y Ocultar menu

const menu = document.getElementById('nav-menu'),
      toggle = document.getElementById('nav-toggle'),
      close = document.getElementById('nav-cerrar')

    if(toggle){
        toggle.addEventListener('click', () => {
            menu.classList.add('mostrar-menu')
        })
    }

    if(close){
        close.addEventListener('click', () => {
            menu.classList.remove('mostrar-menu')
        })
    }

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__ancla')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('mostrar-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
