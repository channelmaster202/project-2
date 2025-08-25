let menu = document.querySelector(".menu")
let btns = document.querySelector(".btns")
let nav = document.querySelector(".nav")
let log = document.querySelector(".logo")
let btnsLogo = document.querySelector(".btns-logo")


let n = 0
menu.addEventListener("click", function () {
    if (n == 0) {
        nav.style.height = '30vh'
        nav.style.justifyContent = 'spacebetween'
        btnsLogo.style.display = 'flex'
        btns.style.display = 'flex'
        btns.style.flexDirection = 'column'
        btnsLogo.style.flexDirection = 'column'
        btns.style.alignItems = 'center'

        n = 1
    } else {
        nav.style.height = '10vh'
        nav.style.justifyContent = 'spacebetween'
        btns.style.display = 'none'
        n = 0
    }




})

