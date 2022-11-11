const slider = document.querySelector("#slider");
let sliderSection = document.querySelector(".slider__section");
let sliderSectionLast = sliderSection[ sliderSection.length -1];

console.log(typeof sliderSectionLast);
//console.log(instanceof sliderSectionLast);

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");



function moverDerecha()
{
    let sliderSectionFirst =document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
               slider.style.transition ="none";
               slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = "-100%";
    
               }, 500);
}

function moverIzquierda()
{
    let sliderSection =document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
               slider.style.transition ="none";
               slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = "-100%";
    
               }, 500);

}


btnRight.addEventListener('click', function(){

    moverDerecha();
});

btnLeft.addEventListener('click', function(){
    moverIzquierda();
});

setInterval(function(){
moverDerecha();

}, 5000);










