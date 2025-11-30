let totalImages = 6; // कितनी photos हैं
let current = 1;

const img = document.getElementById("productImage");

window.addEventListener("touchmove", (e) => {
    let x = e.touches[0].clientX;

    if (x % 20 === 0) {
        current++;
        if (current > totalImages) current = 1;
        img.src = current + ".png";
    }
});
