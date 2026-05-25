(function navController() {
    const hamburger = document.querySelector("#bar")
    const closeBtn = document.querySelector("#closeNav")
    const navBar = document.querySelector("#navList")
    const body = document.querySelector("body")

    hamburger.addEventListener("click", () => openNav())

    closeBtn.addEventListener("click", () => closeNav())

    document.querySelectorAll(".menu").forEach((e) => e.addEventListener("click",closeNav))

    function closeNav() {
        navBar.classList.remove("changeVisibility")
        hamburger.ariaExpanded = false
        closeBtn.parentElement.classList.remove("changeVisibility")
        body.style.overflowY = "visible"
    }

    function openNav() {
        navBar.classList.add("changeVisibility")
        hamburger.ariaExpanded = true
        closeBtn.parentElement.classList.add("changeVisibility")
        closeBtn.focus()
        body.style.overflowY = "hidden"
    }
})()
