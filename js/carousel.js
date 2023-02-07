const imgArray = [
    "Dragon-blue&orange.webp",
    "dragons-fight.jpg",
    "Dragonseraphina.webp",
    "flaming-dragons.jpg"
]

const carouselEl = document.getElementById("carousel")
console.log(carouselEl)


for (i = 0; i < imgArray.length; i++) {

    if (i === 0) {

        let singleSlideActiveEl = `
        <div class='slide active'>
            <img src="./img/${imgArray[i]}" alt="">
        </div>
        `
        console.log(singleSlideActiveEl)

        carouselEl.innerHTML += singleSlideActiveEl
    } else {

        let singleSlideEl = `
        <div class='slide'>
            <img src="./img/${imgArray[i]}" alt="">
        </div>
        `
        console.log(singleSlideEl)

        carouselEl.innerHTML += singleSlideEl
    }
}

let slideEls = document.querySelectorAll(".carousel .slide")
console.log(slideEls)


const arrowLeftEl = document.getElementById("arrow-left")
const arrowRightEl = document.getElementById("arrow-right")

let indexSlide = 0

arrowRightEl.addEventListener("click", function () {
    console.log("next slide")

    if (indexSlide < slideEls.length - 1) {

    // nascondere la slide corrente
    let currentSlide = slideEls[indexSlide]
    console.log(currentSlide)
    currentSlide.classList.remove("active")
    console.log(currentSlide)

    // mostrare la slide successiva
    let nextSlide = slideEls[++indexSlide]
    nextSlide.classList.add("active")
    console.log(nextSlide)

    console.log("index slide", indexSlide)
    }

})

arrowLeftEl.addEventListener("click", function () {
    console.log("prec slide")

    if (indexSlide > 0) {

    // nascondere la slide corrente
    let currentSlide = slideEls[indexSlide]
    currentSlide.classList.remove("active")
    console.log(currentSlide)

    // mostrare la slide precedente
    let precSlide = slideEls[--indexSlide]
    precSlide.classList.add("active")
    console.log(precSlide)

    console.log("index slide", indexSlide)
    }
})

