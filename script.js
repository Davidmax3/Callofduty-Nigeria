let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navigation')

menu.onclick = () => {
    menu.classList.toggle ('open')
    navlist.classList.toggle ('open')

}
 