let current = 1;
const total = 6;

let startX = 0;

const img = document.getElementById("photo");

img.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

img.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
        // Left swipe
        current++;
        if (current > total) current = 1;
    } 
    else if (endX - startX > 50) {
        // Right swipe
        current--;
        if (current < 1) current = total;
    }

    img.src = `${current}.png`;
});
