import * as helper from "../helper.js"

export function createAbout() {
    const about = helper.createElement("div", { id: "about" })

    const aboutUs = helper.createElement("div", { id: "aboutus" })
    const aboutUsHeading = helper.createElement("h2", { content: "Little About Us" })
    const aboutusPara = helper.createElement("p", {content: "We want every person who comes to our restaurant(Home) to get some feel of calm and refreshment. that's why we always give our 100%"})
    aboutUs.append(aboutUsHeading,aboutusPara)


    const details = helper.createElement("div",{id:"details"})
    const detailsHeading = helper.createElement("h3",{content:"Contact"})
    const detailsList = helper.createElement("ul")
    const detailsListItem1 = helper.createElement("li",{content:"Phone: +111222333"})
    const detailsListItem2 = helper.createElement("li",{content:"Email: RB@gmail.com"})
    const detailsListItem3 = helper.createElement("li",{content:"Address: 42 Sugar Maple Lane, Springfield, IL 62704"})
    detailsList.append(detailsListItem1,detailsListItem2,detailsListItem3)
    details.append(detailsHeading,detailsList)


    const msg = helper.createElement("div",{id:"msg",content:"❤️"})


    about.append(aboutUs,details,msg)
    return about
}