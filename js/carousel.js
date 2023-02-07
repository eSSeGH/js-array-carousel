const imgArray = [
    "Dragon-blue&orange.webp",
    "dragons-fight.jpg",
    "Dragonseraphina.webp",
    "flaming-dragons.jpg"
]

const carouselEl = document.getElementById("carousel")



for (i = 0; i < imgArray.length; i++) {

    if (i === 0) {

        let singleSlideActiveEl = `
        <div class='slide active'>
            <img src="./img/${imgArray[i]}" alt="">
        </div>
        `
        carouselEl.innerHTML += singleSlideActiveEl
    } else {

        let singleSlideEl = `
        <div class='slide'>
            <img src="./img/${imgArray[i]}" alt="">
        </div>
        `
        carouselEl.innerHTML += singleSlideEl
    }
}

// selezionare gli elementi html slide appena creati
let slideEls = document.querySelectorAll(".carousel .slide")

// recuperare le freccette
const arrowLeftEl = document.getElementById("arrow-left")
const arrowRightEl = document.getElementById("arrow-right")

// dichiarare un indice che tenga conto della slide su cui siamo 
// arrivati di volta in volta con le freccette
let indexSlide = 0

arrowRightEl.addEventListener("click", function () {
    console.log("next slide")

    // controllo slide limite destro
    if (indexSlide < slideEls.length - 1) {

    // nascondere la slide corrente
    let currentSlide = slideEls[indexSlide]
    currentSlide.classList.remove("active")

    // mostrare la slide successiva
    let nextSlide = slideEls[++indexSlide]
    nextSlide.classList.add("active")

})

arrowLeftEl.addEventListener("click", function () {
    console.log("prec slide")

    // controllo slide limite sinistro
    if (indexSlide > 0) {

    // nascondere la slide corrente
    let currentSlide = slideEls[indexSlide]
    currentSlide.classList.remove("active")

    // mostrare la slide precedente
    let precSlide = slideEls[--indexSlide]
    precSlide.classList.add("active")

})

