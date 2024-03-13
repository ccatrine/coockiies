'use strict'
let sliderDiv=document.querySelector("#slider")
let sliderImages=sliderDiv.querySelectorAll("img")
let sliderSpeed=1000
let sliderChangeSpeed=800
let currentSlide=0
let slidesNumber=sliderImages.length
function nextSlide(){   
    sliderImages[currentSlide].style.opacity=0
    currentSlide++
    if (currentSlide===slidesNumber) {currentSlide=0}
    sliderImages[currentSlide].style.opacity=1
}


setInterval(nextSlide,sliderSpeed)


