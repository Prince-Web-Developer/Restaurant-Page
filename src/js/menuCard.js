export function menuCard() {

    function scrollManager() {
        const menuCard = document.querySelector(".menuCard")
        const navBar = document.querySelector("#navList")

        if (navBar.classList.contains("changeVisibility")) return null
        if (!menuCard) {
            clearInterval(scrollInterval)
            return null
        }
        const firstMenuItem = menuCard.firstChild
        firstMenuItem.remove()

        scrollMenu()

        menuCard.append(firstMenuItem)
    }

    function scrollMenu() {
        document.querySelector('.menuItem:nth-child(3)').scrollIntoView({
            inline: 'center',
            block: 'nearest'
        });
    }
    scrollMenu()
    const scrollInterval = setInterval(scrollManager, 2000);
}

