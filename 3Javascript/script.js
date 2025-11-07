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

        const prev = slider.querySelector(".prev");
        const next = slider.querySelector(".next");

        prev.addEventListener("click", () => {
            slideIndex = (slideIndex -1 + total) % total;
            showSlides(slideIndex);
        });

        next.addEventListener("click", () => {
            slideIndex = (slideIndex + 1) % total;
            showSlides(slideIndex); 
        });
    });
});




// COURSE PAGE JAVASCRIPT

if (document.body.classList.contains('courses-page')) {
  document.querySelectorAll('.course-bubble').forEach(bubble => {
    bubble.addEventListener('click', () => {
      const isActive = bubble.classList.contains('active');
      document.querySelectorAll('.course-bubble').forEach(b => b.classList.remove('active'));
      if (!isActive) bubble.classList.add('active');
    });
  });
}


const modal = document.getElementById("course-modal");
const modalTitle = document.getElementById("course-title");
const modalDescription = document.getElementById("course-description");
const closeBtn = document.querySelector(".close-btn");

const courseDescriptions = {
    "BSc (Hons) Computing": "This Course covers blah blach",
    "BSc (Hons) Software Engineering": "This Course covers blah blach",
    "BSc (Hons) Computer Networks":"This Course covers blah blach",
    "BSc (Hons) Cyber Security with Forensics":"This Course covers blah blach",
    "BSc (Hons) Computer Science": "This Course covers blah blach",
    "BSc (Hons) Software Development": "This Course covers blah blach",
    "BSc (Hons) Graphic Design": "This Course covers blah blach",
    "BSc (Hons) Digital Media Designs": "This Course covers blah blach",
    "BSc (Hons) Interior Architecture": "This Course covers blah blach",
    "BSc (Hons) Design (Visual Communication)": "This Course covers blah blach",
    "BSc (Hons) Design Futures": "This Course covers blah blach",
};

document.querySelectorAll(".course-content li").forEach(course => {
    course.addEventListener("click", () =>{
        const courseName = course.textContent.trim();
        modalTitle.textContent = courseName;
        modalDescription.textContent = courseDescriptions [courseName]

        modal.style.display = "flex";
        document.body.classList.add("modal-open");
    });
});

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
    if (e.target === modal) closeModal();
});

function closeModal() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
}


const searchInput = document.getElementById("course-search");
const searchBtn = document.getElementById("search-btn");

function openCourseModal(courseName) {
    const matchedCourse = Obkect.keys(courseDescriptions).find(
    if(description){
        modalTitle.textContent = courseName;
        modalDescription.textContent = description;
        modal.style.display = "flex";
        document.body.classList.add("modal-open");
    } else {
        alert("Course not found!");
    }
}

searchBtn.addEventListener("click",() => {
    const query = searchInput.value.trim();
    openCourseModal(query);
});


searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const query = searchInput.value.trim();
        openCourseModal(query);

    }
});


// Course search bar 
const searchInput = document.getElementById("course-search");
const searchResults = document.getElementById("search-results");

function openCourseModal(courseName) {
    const description = courseDescriptions.find(
    key => key.toLowerCase() === courseNmae.toLowerCase()
    );
    if (matchedCourse) {
        modalTitle.textContent = matchedCourse;
        modalDescription.textContent = courseDescriptions[matchedCourse];
        modal.style.display = "flex";
        document.body.classList.add("modal-open");
    
    }
}

searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    searchResults.innerHTML = "";

    if (query.length === 0) return ;

    const matches = Object.keys(courseDescriptions).filter(course =>
        course.toLowerCase().includes(query)
    );

    matches.forEach(match =>) {
        const div = document.createElement("div");
        div.textContent = match;
        div.addEventListener("click", () => {
            openCourseModal(match);
            searchResults.innerHTML = "";
            searchInput.value - match;
        });
        searchRestults.appendChild(div);
    });

document.addEventListener("click", (e) =>) {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.innerHTML = "";
    }
};

    

searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    openCourseModal(query);

});

searchBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const query = searchInput.value.trim();
    openCourseModal(query);
    }
});










      