let images = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
let index = 0;

let img = document.getElementById("mainImage");

let startX = 0;
let endX = 0;

img.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

img.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
        nextImage();
    } else if (endX - startX > 50) {
        previousImage();
    }
});

function nextImage() {
    index = (index + 1) % images.length;
    img.src = images[index];
}

function previousImage() {
    index = (index - 1 + images.length) % images.length;
    img.src = images[index];
}
