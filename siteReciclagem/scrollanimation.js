const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            setTimeout(() =>{
                entry.target.classList.add('show');
            }, entry.target.dataset.delay)
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))

const observerCirculo = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            setTimeout(() =>{
                entry.target.classList.add('direita');
            }, entry.target.dataset.delay)
        } else {
            entry.target.classList.remove('direita');
        }
    })
})

const circuloElements = document.querySelectorAll('.esquerda');
circuloElements.forEach((el) => observerCirculo.observe(el))