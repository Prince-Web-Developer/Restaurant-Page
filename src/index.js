import css from "./style.css"
import nav from "./js/nav.js"
import { setUpSlider } from "./js/slider.js"

import { createHome } from "./js/pages/home.js"
import { createMenu } from "./js/pages/menu.js"
import { createAbout } from "./js/pages/about.js"


const contentCon = document.querySelector("#content")
const menuButtons = document.querySelectorAll(".menu")
menuButtons.forEach((menuButton) => menuButton.addEventListener("click", changeMenu))


function changeMenu(e) {
    const Menu = e.target.innerText
    contentCon.innerHTML = ""
    if (Menu == "About") {
        contentCon.append(createAbout())
    }
    else if (Menu == "Menu") {
        contentCon.append(createMenu())
    }
    else {
        contentCon.append(createHome())
        setUpSlider()
    }
}

menuButtons[0].click()
