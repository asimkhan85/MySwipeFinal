let images = ["img1.png", "img2.png", "img3.png"];
let index = 0;

let img = document.getElementById("mainImage");

let startX = 0;

img.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

img.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
        // NEXT image
        index = (index + 1) % images.length;
        img.src = images[index];
    } else if (endX - startX > 50) {
        // PREVIOUS image
        index = (index - 1 + images.length) % images.length;
        img.src = images[index];
    }
});
