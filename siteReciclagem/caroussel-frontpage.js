const slider = document.querySelector('.slider-frontpage')
const leftArrow = document.querySelector('.left')
const rightArrow = document.querySelector('.right')
const carousselFrontpage = document.querySelector(".caroussel-frontpage")
const imgElement = document.querySelectorAll('.slider-frontpage img')
const imgAmount = imgElement.length
var sectionIndex = 0
const carousselWidth = carousselFrontpage.offsetWidth;




function moveSliderRight() {

    if (sectionIndex < imgAmount - 1) {
        sectionIndex = sectionIndex + 1;
    } else {
        sectionIndex = 0;
    }

    slider.style.transform = 'translate(' + (sectionIndex) * -carousselWidth + 'px)';
}
rightArrow.addEventListener('click', moveSliderRight);



function moveSliderLeft() {

    if (sectionIndex > 0) {
        sectionIndex = sectionIndex - 2;
    } else {
        sectionIndex = imgAmount - 1;
    }
    
    slider.style.transform = 'translate(' + (sectionIndex) * -carousselWidth + 'px)';

}
leftArrow.addEventListener('click', moveSliderLeft)

setInterval(moveSlider, 4000)