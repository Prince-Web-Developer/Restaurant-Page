export function setUpSlider() {
    let imgVisible = 1
    let imgVisibleByManualScroll = 1
    const gallery = document.querySelector(".gallery")


    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const imgNo = entry.target.dataset.img
                lightImageButton(imgNo)
                entry.target.ariaHidden = false
            }
            else {
                entry.target.ariaHidden = true
            }
        });
    });


    function scrollImgToView(imgToMakeVisible) {
        const img = gallery.querySelector(`[data-img="${imgToMakeVisible}"]`)
        img.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        })
    }

    function scrollManager(event) {
        const ele = event.target
        const img = ele.dataset.img
        imgVisible = imgVisibleByManualScroll
        if (img) {
            imgVisible = img
        }
        else {
            if (ele.classList.contains("forwardG")) {
                imgVisible = imgVisible + 1 > 4 ? 4 : imgVisible + 1
            }
            else {
                imgVisible = imgVisible - 1 < 1 ? 1 : imgVisible - 1
            }
        }
        scrollImgToView(imgVisible)
        lightImageButton(imgVisible)
    }


    const scrollBtns = document.querySelectorAll(".galleryBtn")
    scrollBtns.forEach((btn) => {
        btn.addEventListener("click", scrollManager)
    })

    document.querySelectorAll(".galleryImgCon").forEach((e) => {
        observer.observe(e)
    })


    function lightImageButton(imgNo) {
        const galleryBtn = document.querySelectorAll("button[data-img]")
        galleryBtn.forEach((e) => {
            if (e.dataset.img == imgNo) e.style.backgroundColor = "black"
            else e.style.backgroundColor = "#cccccc"
        })
        imgVisibleByManualScroll = +imgNo
    }

}