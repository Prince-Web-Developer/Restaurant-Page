(function navController(){
    const hamburger  = document.querySelector("#bar")
    const closeBtn = document.querySelector("#closeNav")
    const navBar = document.querySelector("#navList")
    const body = document.querySelector("body")

    hamburger.addEventListener("click",() => {
        navBar.classList.add("changeVisibility")
        hamburger.ariaExpanded = true
        closeBtn.parentElement.classList.add("changeVisibility")
        closeBtn.focus()
        body.style.overflowY = "hidden"
    })

    closeBtn.addEventListener("click",() => {
        navBar.classList.remove("changeVisibility")
        hamburger.ariaExpanded = false
        closeBtn.parentElement.classList.remove("changeVisibility")
        body.style.overflowY = "visible"
    })    
})()
