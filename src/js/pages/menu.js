import * as helper from "../helper.js"


export function createMenu(){
    const menu = helper.createElement("div",{id:"menu"})

    const menuCard = helper.createElement("div",{cls:["menuCard","scrollBar"]})

    const menuItem = helper.createElement("div",{cls:["menuItem"]})
    const menuItemHeadingCon = helper.createElement("div",{cls:["menuItemHeading"]})
    const menuItemHeading = helper.createElement("h3",{content:"Truffle Parmesan Fries"})
    menuItemHeadingCon.append(menuItemHeading)
    const menuItemImg = helper.createElement("div",{cls:["menuImg"]})
    menuItem.append(menuItemHeadingCon,menuItemImg)
    const names = ["Truffle Parmesan Fries","Masala Dosa","Butter Milk Pancake","Chocolate milkshake","Salad"]
    const alts = ["Tasty Truffle Parmesan Fries","Masala dosa stuffed with spiced potato filling, served with coconut chutney and sambar","A tall stack of fluffy buttermilk pancakes topped with butter and dripping with maple syrup","Tall glass of thick chocolate milkshake topped with whipped cream and strawberry shavings","green Healthy Salad"]

    for (let index = 0; index < 5; index++) {
        const temp = menuItem.cloneNode(true)
        const heading = temp.querySelector("h3")
        heading.innerText = names[index]

        const imgCon = temp.querySelector(".menuImg")
        imgCon.classList.add(`imgMenu${index + 1}`)
        imgCon.ariaLabel = alts[index]
        menuCard.append(temp)
    }

    menu.append(menuCard)
    return menu
}