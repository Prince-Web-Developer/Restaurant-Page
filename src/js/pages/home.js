import * as helper from "../helper.js"


// images for home
import campFireImg from "../../images/image1.jpg"
import pastaImage from "../../images/pastaPlate-removebg-preview.png"

export function createHome() {
    const home = helper.createElement("div", { cls: ["section"], id: "home" })

    const intro = helper.createElement("div", { cls: ["intro"] })

    const imgCon = helper.createElement("div", { cls: ["img-container"] })
    const imgOfIntro1 = helper.createImage({ src: campFireImg, alt: "campfire ligthing a dark place" })
    imgCon.appendChild(imgOfIntro1)

    const introTextContainer = helper.createElement("div", { cls: ["text-container"] })
    const headingIntro = helper.createElement("h2", { cls: ["gray-text-styling"], content: "We Have One Goal" })
    const paragraphIntro = helper.createElement("p", { content: "To Make Your Heart Happy 🍪" })
    introTextContainer.append(headingIntro, paragraphIntro)

    intro.append(imgCon, introTextContainer)


    const pageSection = helper.createElement("div", { cls: ["pageSection", "intro"] })
    const pastaImgCon = helper.createElement("div", { cls: ["pastaImgCon", "img-container"] })
    const pastaImg = helper.createImage({ id: "pastaImg", src: pastaImage, alt: "yummy pasta in a plate" })
    pastaImgCon.append(pastaImg)
    const sectionTextContainer = helper.createElement("div", { cls: ["text-container"] })
    const sectionText = helper.createElement("p", { cls: ["SectionText"], content: "Enjoy Tasty Food In The Heart Of Nature" })
    sectionTextContainer.append(sectionText)

    pageSection.append(pastaImgCon, sectionTextContainer)



    const gallerySection = helper.createElement("div", { cls: ["gallerySection"] })

    const backButton = helper.createElement("button", { cls: ["backG", "galleryBtn"] })
    backButton.ariaLabel = "view previous photo"
    backButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>`

    const galleryInterface = helper.createElement("div", { cls: ["galleryInterface"] })
    const gallery = helper.createElement("div", { cls: ["gallery","scrollBar"] })

    const galleryImg = helper.createElement("div", { cls: ["galleryImgCon"] })

    gallery.innerHTML = helper.createRepeatingElements(galleryImg, "img", "data-img", 4).innerHTML


    const galleryImgButtonCon = helper.createElement("div", { cls: ["galleryBtnCon"] })
    const galleryBtn = helper.createElement("button", { cls: ["galleryBtn"] })

    galleryImgButtonCon.innerHTML = helper.createRepeatingElements(galleryBtn, null, "data-img", 4).innerHTML



    galleryInterface.append(gallery, galleryImgButtonCon)

    const forwardButton = helper.createElement("button", { cls: ["forwardG", "galleryBtn"] })
    forwardButton.ariaLabel = "View next photo"
    forwardButton.innerHTML = `<svg  class="forwardG" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"> <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>`

    gallerySection.append(backButton, galleryInterface, forwardButton)


    const commentSectionDiv = helper.createElement("div", { cls: ["commentSection"] })
    const commentHeading = helper.createElement("h3", { content: "Reviews" })

    const reviewsContainer = helper.createElement("div", { cls: ["reviews"] })

    const reviewContainer = helper.createElement("div", { cls: ["review"] })
    const profile = helper.createElement("div", { cls: ["profile"] })
    const profilePic = helper.createElement("div", { cls: ["profilePic"] })
    const profileName = helper.createElement("div", { cls: ["name", "smaller-font"] })

    profile.append(profilePic, profileName)

    const reviewContentCon = helper.createElement("div", { cls: ["reviewContent"] })
    const reviewContent = helper.createElement("h4", { cls: ["smaller-font"] })
    reviewContentCon.append(reviewContent)

    reviewContainer.append(profile, reviewContentCon)

    const temp = helper.createRepeatingElements(reviewContainer, null, null, 3).querySelectorAll(".review")

    const nameAndReview = [{ "name": "Donald Trump", "review": "They Got The Best Food 🔥" }, { "name": "Me", "review": "Good Food" }, { "name": "Sam", "review": "Enjoyed tasty food around nature" }]

    temp.forEach((e, index) => {
        const profilePic = e.querySelector(".profilePic")
        profilePic.classList.add(`profile${index + 1}`)

        const profileName = e.querySelector(".name")
        profileName.innerText = nameAndReview[index].name

        const reviewContent = e.querySelector("h4")
        reviewContent.innerText = nameAndReview[index].review

        reviewsContainer.append(e)
    })




    commentSectionDiv.append(commentHeading, reviewsContainer)

    home.append(intro, pageSection, gallerySection, commentSectionDiv)

    return home
}


