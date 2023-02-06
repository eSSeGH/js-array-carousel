console.log("carousel")

const arrowLeftEl = document.getElementById("arrow-left")
const arrowRightEl = document.getElementById("arrow-right")

const firstSlide = document.getElementById("firstSlide")
const secondSlide = document.getElementById("secondSlide")
const thirdSlide = document.getElementById("thirdSlide")
const fourthSlide = document.getElementById("fourthSlide")

const slideEls = [
    firstSlide,
    secondSlide,
    thirdSlide,
    fourthSlide
]

console.log(slideEls)

let indexSlide = 0

arrowRightEl.addEventListener("click", function () {
    console.log("next slide")

    let currentSlide = slideEls[indexSlide]
    console.log(currentSlide)
    currentSlide.classList.remove("active")
    console.log(currentSlide)

    let nextSlide = slideEls[indexSlide + 1]
    nextSlide.classList.add("active")
    console.log(nextSlide)

    indexSlide++
    console.log("index slide", indexSlide)
})


arrowLeftEl.addEventListener("click", function () {
    console.log("next slide")

    let currentSlide = slideEls[indexSlide]
    currentSlide.classList.remove("active")
    console.log(currentSlide)

    let precSlide = slideEls[indexSlide - 1]
    precSlide.classList.add("active")
    console.log(precSlide)

    indexSlide += -1
    console.log("index slide", indexSlide)
})

// poi c'è da aggiungere il controllo che 
// blocchi il codice all'ultima slide

let slideImgs = []