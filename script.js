let current = 0;
let slides = document.querySelectorAll(".swiper-slide");

function showSlide(n) {
    slides.forEach((s, i) => {
        s.style.display = (i === n) ? "flex" : "none";
    });
}

showSlide(current);

let startX = 0;

document.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
        current = (current + 1) % slides.length;  // next
    } 
    else if (endX - startX > 50) {
        current = (current - 1 + slides.length) % slides.length; // previous
    }

    showSlide(current);
});
