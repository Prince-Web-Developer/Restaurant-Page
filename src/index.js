import css from "./style.css"
import nav from "./js/nav.js"
import { setUpSlider } from "./js/slider.js"
import {menuCard} from "./js/menuCard.js"

import { createHome } from "./js/pages/home.js"
import { createMenu } from "./js/pages/menu.js"
import { createAbout } from "./js/pages/about.js"



const contentCon = document.querySelector("#content")
const menuButtons = document.querySelectorAll(".menu")
menuButtons.forEach((menuButton) => menuButton.addEventListener("click", changeMenu))


function changeMenu(e) {
    contentCon.classList.remove("fadeIn")
    const Menu = e.target.innerText
    contentCon.innerHTML = ""
    if (Menu == "About") {
        contentCon.append(createAbout())
    }
    else if (Menu == "Menu") {
        contentCon.append(createMenu())
        menuCard()
    }
    else {
        contentCon.append(createHome())
        setUpSlider()
    }
    contentCon.classList.add("fadeIn")
}

menuButtons[0].click()
menuButtons[0].focus()
