document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll(".image-slider");

    sliders.forEach(slider => {
        let slideIndex = 0;
        const slides = slider.querySelectorAll(".slides img");
        const total = slides.length;

        slides.forEach((img, i) => {
            img.style.display = i === 0 ? "block" : "none";
        });

        function showSlides(n) {
            slides.forEach((img, i) => {
                img.style.display = i === n ? "block" : "none";
            });
        }

        const prev =slider.querySelector(".prev");
        const next =slider.querySelector(".next");

        prev.addEventListener("click", () => {
            slideIndex = (slideIndex -1 + total) % total;
            showSlides(slideIndex);
        });

        next.addEventListener("click", () => {
            slideindex = (slideIndex + 1) % total;
            showSlides(slideIndex); 
        });
    });
});
      