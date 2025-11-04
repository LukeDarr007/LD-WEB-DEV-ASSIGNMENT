document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelector.SelectorAll(".image-slider");

    sliders.ForEach(slider =>{
        let index = 0;
        const slides = slider.querySelectorAll(".slide img");
        const total = slides.length;

        slides.forEach((img, i) => {
            img.style.display = i === 0 ? "block" : "none";
        });

        function showSlides(n) {
            slides.forEach((img, i) => {
                img.style.display = i === n ? "block" : "none"; 
            });
        }

        const prev = slider.querySelector(".prev");
        const next = slider.querySelector(".next");

        prev.addEventListener("click", () => {
            index = (index - 1 + total) % total;
            showSlide(index);
        });

        next.addEventListener("click", () => {
            index = (index + 1) % total;
            showSlides(index);
        });
    });
});
