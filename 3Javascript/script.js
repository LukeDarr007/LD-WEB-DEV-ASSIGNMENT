document.addEventListener("DOMContentLoaded", function() {

    // ==================== INDEX PAGE JS ====================

    // ----- Image Sliders for Index Page -----
    const sliders = document.querySelectorAll(".image-slider");
    sliders.forEach(slider => {
        const slides = slider.querySelectorAll(".slides img");
        if (!slides.length) return;
        let index = 0;

        const showSlide = i => {
            slides.forEach((s, idx) => s.style.display = idx === i ? "block" : "none");
        }

        showSlide(index);

        const nextBtn = slider.querySelector(".next");
        const prevBtn = slider.querySelector(".prev");

        if (nextBtn) {
            nextBtn.addEventListener("click", () => {
                index = (index + 1) % slides.length;
                showSlide(index);
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener("click", () => {
                index = (index - 1 + slides.length) % slides.length;
                showSlide(index);
            });
        }
    });

    // ==================== COURSES PAGE JS ====================

    const modal = document.getElementById("course-modal");
    if (modal) {
        const closeBtn = modal.querySelector(".close-btn");

        const coursesData = {
            "BSc (Hons) Computing": { type: "Undergraduate", description: "Learn how to code, configure and integrate applications, databases and systems architectures which form the pillars of modern technology.", ucasCode: "G504", ucasPoints: "112", year: "2026/27", mode: "Full-time", length: "3 / 4 Years", subject: "Computing" },
            "BSc (Hons) Computer Networks": { type: "Undergraduate", description: "Includes programming, cyber security, information systems, management and professionalism in a technical environment.", ucasCode: "G420", ucasPoints: "112", year: "2026/27", mode: "Full-time", length: "3 / 4 Years", subject: "Computing" },
            "BSc (Hons) Cyber Security with Forensics": { type: "Undergraduate", description: "Prepare for a career in cyber security by designing security systems, identifying evidence of cybercrimes and acting as detectives in a digital world.", ucasCode: "F4G4", ucasPoints: "112", year: "2026/27", mode: "Full-time", length: "3 / 4 Years", subject: "Computing" },
            "BSc (Hons) Computer Science for Games": { type: "Undergraduate", description: "Learn to design and develop computer games with strong programming, math and graphics skills.", ucasCode: "G600", ucasPoints: "112", year: "2026/27", mode: "Full-time", length: "3 / 4 Years", subject: "Computing" },
            "BSc (Hons) Software Engineering": { type: "Undergraduate", description: "Develop, test and maintain software systems for multiple platforms and environments.", ucasCode: "G450", ucasPoints: "112", year: "2026/27", mode: "Full-time", length: "3 / 4 Years", subject: "Computing" },
            "BSc (Hons) Computer Science": { type: "Undergraduate", description: "Explore algorithms, programming, and computational theory for modern technology solutions.", ucasCode: "G401", ucasPoints: "112", year: "2026/27", mode: "Full-time", length: "3 / 4 Years", subject: "Computing" },
            "MSc Computing": { type: "Postgraduate", description: "A course enhanced by real-life project experience for non-computing graduates wanting to pursue a career in the IT industry.", ucasCode: "", ucasPoints: "", year: "2026/27", mode: "Part-time", length: "3 Years", subject: "Computing" },
            "MPhil Computing and Informatics": { type: "Postgraduate", description: "Conduct an intensive, supervised study where you critically investigate and evaluate an approved topic and make an original contribution to knowledge.", ucasCode: "", ucasPoints: "", year: "2026/27", mode: "Part-time", length: "3 Years", subject: "Computing" },
            "MSc Cyber Security": { type: "Postgraduate", description: "Develop your skills and academic knowledge in the growing field of cyber security through academic teaching, industry input and practical skills development.", ucasCode: "", ucasPoints: "", year: "2026/27", mode: "Full-time", length: "1 Year", subject: "Computing" },
            "BA (Hons) Graphic Design": { type: "Undergraduate", description: "Develop your own creative and innovative approach to graphic design by exploring and challenging contemporary practices through diverse projects.", ucasCode: "W210", ucasPoints: "112", year: "2026/27", mode: "Full-time", length: "3 / 4 Years", subject: "Art and Design" },
            "BA (Hons) Interior Architecture and Design": { type: "Undergraduate", description: "Learn to design functional and aesthetic interior spaces using creativity and technical skills.", ucasCode: "W250", ucasPoints: "112", year: "2026/27", mode: "Full-time", length: "3 / 4 Years", subject: "Art and Design" },
            "BA (Hons) Jewellery, Materials and Design": { type: "Undergraduate", description: "Create innovative jewellery and objects, experimenting with materials and techniques.", ucasCode: "W270", ucasPoints: "112", year: "2026/27", mode: "Full-time", length: "3 / 4 Years", subject: "Art and Design" },
            "BA (Hons) Game Design and Development": { type: "Undergraduate", description: "Design and develop games with focus on storytelling, gameplay and mechanics.", ucasCode: "W280", ucasPoints: "112", year: "2026/27", mode: "Full-time", length: "3 / 4 Years", subject: "Art and Design" },
            "BSc (Hons) Product Design": { type: "Undergraduate", description: "Learn to design innovative products from concept to production.", ucasCode: "W290", ucasPoints: "112", year: "2026/27", mode: "Full-time", length: "3 / 4 Years", subject: "Art and Design" },
            "BA (Hons) Product Design": { type: "Undergraduate", description: "Focus on designing functional and creative products with a design-led approach.", ucasCode: "W300", ucasPoints: "112", year: "2026/27", mode: "Full-time", length: "3 / 4 Years", subject: "Art and Design" },
            "BA (Hons) Digital Media Production": { type: "Undergraduate", description: "Develop skills in video, audio and digital media production.", ucasCode: "W310", ucasPoints: "112", year: "2026/27", mode: "Full-time", length: "3 / 4 Years", subject: "Art and Design" }
        };

        function openCourseModal(name) {
            const course = coursesData[name];
            if (!course) return;
            modal.querySelector("#course-title").textContent = name + " (" + course.type + ")";
            modal.querySelector("#course-description").textContent = course.description;
            modal.querySelector("#course-ucas").textContent = course.ucasCode || "N/A";
            modal.querySelector("#course-points").textContent = course.ucasPoints || "N/A";
            modal.querySelector("#course-year").textContent = course.year;
            modal.querySelector("#course-mode").textContent = course.mode;
            modal.querySelector("#course-length").textContent = course.length;
            modal.querySelector("#course-subject").textContent = course.subject;
            modal.style.display = "flex";
            document.body.classList.add("modal-open");
        }

        function closeModal() {
            modal.style.display = "none";
            document.body.classList.remove("modal-open");
        }

        closeBtn.addEventListener("click", closeModal);
        modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });

        // Expand / Collapse course bubbles
        document.querySelectorAll(".course-bubble").forEach(bubble => {
            bubble.addEventListener("click", () => {
                const active = bubble.classList.contains("active");
                document.querySelectorAll(".course-bubble").forEach(b => b.classList.remove("active"));
                if (!active) bubble.classList.add("active");
            });
        });

        // Click on individual course
        document.querySelectorAll(".course-content li").forEach(li => {
            li.addEventListener("click", e => {
                e.stopPropagation();
                let name = li.textContent.replace(/[-–]\s*(Undergraduate|Postgraduate)/i, "").trim();
                const match = Object.keys(coursesData).find(c => c.toLowerCase() === name.toLowerCase());
                openCourseModal(match || name);
            });
        });

        // ----- Course Page Search with Dropdown -----
        const courseSearchInput = document.getElementById("course-search");
        const courseSearchBtn = document.getElementById("search-btn");
        const courseSearchResults = document.getElementById("search-results");

        if (courseSearchInput && courseSearchResults) {
            courseSearchInput.addEventListener("input", () => {
                const query = courseSearchInput.value.trim().toLowerCase();
                courseSearchResults.innerHTML = "";
                if (!query) {
                    courseSearchResults.style.display = "none";
                    return;
                }
                Object.keys(coursesData).forEach(c => {
                    if (!c.toLowerCase().includes("courses") && c.toLowerCase().includes(query)) {
                        const div = document.createElement("div");
                        div.textContent = c;
                        div.addEventListener("click", () => {
                            openCourseModal(c);
                            courseSearchInput.value = c;
                            courseSearchResults.innerHTML = "";
                            courseSearchResults.style.display = "none";
                        });
                        courseSearchResults.appendChild(div);
                    }
                });
                if (courseSearchResults.children.length > 0) {
                    courseSearchResults.style.display = "block";
                }
            });

            courseSearchBtn.addEventListener("click", () => openCourseModal(courseSearchInput.value.trim()));
            courseSearchInput.addEventListener("keydown", e => { if (e.key === "Enter") openCourseModal(courseSearchInput.value.trim()); });

            document.addEventListener("click", e => {
                if (!courseSearchInput.contains(e.target) && !courseSearchResults.contains(e.target)) {
                    courseSearchResults.innerHTML = "";
                    courseSearchResults.style.display = "none";
                }
            });
        }

        // ----- Scroll Wheel Controls -----
        const scrollLeft = document.getElementById('scroll-left');
        const scrollRight = document.getElementById('scroll-right');
        const courseBubbles = document.querySelector('.course-bubbles');

        if (scrollLeft && scrollRight && courseBubbles) {
            scrollLeft.addEventListener('click', () => {
                courseBubbles.scrollBy({ left: -350, behavior: 'smooth' });
            });

            scrollRight.addEventListener('click', () => {
                courseBubbles.scrollBy({ left: 350, behavior: 'smooth' });
            });
        }
    }
});