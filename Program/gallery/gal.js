const images = [
    '/Program/Image/image1.avif',
    '/Program/Image/image2.avif',
    '/Program/Image/image3.avif',
    '/Program/Image/image4.avif',
]
let currentindex = 0
const currentimage = document.getElementById('current-image')
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
function Vperod() {
    currentindex = (currentindex + 1) % images.length
    currentimage.src = images[currentindex]
}
function Nazad() {
    currentindex = (currentindex - 1) % images.length
        if (currentindex < 0) {
            currentindex = images.length - 1
        }
        currentimage.src = images[currentindex]
}
nextButton.addEventListener('click', () => {
    Vperod()
})
prevButton.addEventListener('click', () => {
    Nazad()
})
currentimage.addEventListener('click', () => {
    currentimage.requestFullscreen()
});
setInterval(() => {
    Vperod()
}, 20000)
document.addEventListener('keydown', (event) => {
    if (event.code == 'ArrowRight') {
        Vperod()
    }
})
document.addEventListener('keydown', (event) => {
    if (event.code == 'ArrowLeft') {
        Nazad()
    }
})

// DRY