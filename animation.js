var red = 'prismalite-red-logo.png';
var dft = 'prismalite-logo.png';

window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('scrolling', window.scrollY > 0)
    if (window.scrollY > 0) {
        this.document.getElementById('prism-logo').src = red;
    } else {
        this.document.getElementById('prism-logo').src = dft;
    }
})

window.addEventListener("scroll", function(){
    let resp__header = document.querySelector('#resp__header')
    resp__header.classList.toggle('scrolling', window.scrollY > 0)
    if (window.scrollY > 0) {
        this.document.getElementById('resp-prism-logo').src = red;
    } else {
        this.document.getElementById('resp-prism-logo').src = dft;
    }
})


const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((elements) => myObserver.observe(elements))
