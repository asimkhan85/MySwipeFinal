let currentIndex = 1;
const totalImages = 5; // JITNI photos hain utna number kar dena
const mainImage = document.getElementById("mainImage");

let startX = 0;

// Touch start
mainImage.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

// Touch end
mainImage.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    let diff = startX - endX;

    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            nextImage();   // swipe left
        } else {
            prevImage();   // swipe right
        }
    }
});

function nextImage() {
    currentIndex++;
    if (currentIndex > totalImages) currentIndex = 1;
    updateImage();
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 1) currentIndex = totalImages;
    updateImage();
}

function updateImage() {
    mainImage.src = `images/${currentIndex}.png`;
}
