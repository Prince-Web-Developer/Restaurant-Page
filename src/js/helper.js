function createElement(ele,{cls = [],id = null,content = null} = {}){
    const element = document.createElement(ele)
    if (cls){
        cls.forEach((e) => {element.classList.add(e)})
    }
    if (id){
        element.id = id
    }
    if (content){
        element.innerText = content
    }
    return element
}

function createImage({cls = null,id = null,alt,src,width = "",height = ""} = {}){
    const img = createElement("img",{cls:cls,id:id})
    img.src = src
    img.alt = alt
    if (width){
        img.style.width = width
    }
    if (height){
        img.style.height = height
    }
    return img
}

function createRepeatingElements(ele,cls,property,count){
    count = count + 1
    const div = document.createElement("div")
    for (let index = 1; index < count; index++) {
        const clone = ele.cloneNode(true)
        if (cls) clone.classList.add(cls + index)
        if (property) clone.setAttribute(property,index)
        div.append(clone)
    }
    return div
}

export {createElement,createImage,createRepeatingElements}