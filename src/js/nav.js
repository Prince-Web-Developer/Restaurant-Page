export function navController(){
    const hamburger  = document.querySelector("#bar")
    const closeBtn = document.querySelector("#closeNav")
    const navBar = document.querySelector("#navList")

    hamburger.addEventListener("click",() => {
        navBar.classList.add("changeVisibility")
        hamburger.ariaExpanded = true
        closeBtn.parentElement.classList.add("changeVisibility")
        closeBtn.focus()
    })

    closeBtn.addEventListener("click",() => {
        navBar.classList.remove("changeVisibility")
        hamburger.ariaExpanded = false
        closeBtn.parentElement.classList.remove("changeVisibility")
    })
}
