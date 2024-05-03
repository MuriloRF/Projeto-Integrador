const imgs = document.getElementById("imgCaroussel")
const img = document.querySelectorAll("#imgCaroussel #item")

let idx = 0

// caroussel pra direita
function carouselDireita(){
    idx++
    if(idx > img.length - 4) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 310}px)`
}

setInterval((carouselDireita) => {
    
}, 1800);

// setInterval(carouselDireita, 1200)