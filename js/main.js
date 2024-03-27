'use strict'
const sliderDivRate=480/1920
let sliderDiv=document.querySelector("#slider")
let sliderImages=sliderDiv.querySelectorAll("img")
let sliderSpeed=1000
let sliderChangeSpeed=600
let sliderChangeState=1/sliderChangeSpeed
let sliderHeight=480
let currentSlide=0
let nextSlide=1
let nextSlideOpacity=0
let slidesNumber=sliderImages.length
function startShowNextSlide(){   
    sliderImages[currentSlide].style.zIndex=1
    sliderImages[nextSlide].style.zIndex=2
  showNextSlide()
}
function showNextSlide(){
    nextSlideOpacity+=sliderChangeState
    sliderImages[nextSlide].style.opacity=nextSlideOpacity
    if ( sliderImages[nextSlide].style.opacity<1 ){
        setTimeout(showNextSlide,1)

    } else {
        sliderImages[currentSlide].style.opacity=0
        sliderImages [currentSlide].style.zIndex=0
        currentSlide++
        if (currentSlide===slidesNumber) {currentSlide=0}
        nextSlide=currentSlide+1  
     if (nextSlide===slidesNumber) {nextSlide=0}
     nextSlideOpacity=0
     setTimeout(startShowNextSlide,sliderSpeed)
    }
}


setTimeout(startShowNextSlide,sliderSpeed)
onresize=changeScreenSize
function changeScreenSize(){
    sliderDiv.style.height=sliderDiv.offsetWidth*sliderDivRate+"px"
    console.log(sliderDiv.offsetWidth)
}
changeScreenSize()