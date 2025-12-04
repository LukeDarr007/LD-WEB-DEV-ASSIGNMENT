document.addEventListener("DOMContentLoaded", () => {

  (function initSliders(){
    const sliders = document.querySelectorAll(".image-slider");
    sliders.forEach(slider => {
      const slidesContainer = slider.querySelector(".slides");
      const slides = slider.querySelectorAll("img");
      const prevBtn = slider.querySelector(".prev");
      const nextBtn = slider.querySelector(".next");
      if (!slidesContainer || slides.length === 0) return;
      let current = 0;

 
      slidesContainer.style.width = `${100 * slides.length}%`;
      slides.forEach(img => {
        img.style.width = `${100 / slides.length}%`;
        img.style.flex = `0 0 ${100 / slides.length}%`;
      });

      const update = () => {
        slidesContainer.style.transform = `translateX(-${current * (100 / slides.length)}%)`;
      };

      if (prevBtn) prevBtn.addEventListener("click", () => {
        current = (current === 0) ? slides.length - 1 : current - 1;
        update();
      });
      if (nextBtn) nextBtn.addEventListener("click", () => {
        current = (current + 1) % slides.length;
        update();
      });

      update();
    });
  })();


 
  const modal = document.getElementById("course-modal");
  if (!modal) return; 

  const closeBtn = modal.querySelector(".close-btn");

 
  const coursesData = {
    "BSc (Hons) Computing": { type: "Undergraduate", description: "Learn how to code, configure and integrate applications, databases and systems architectures.", ucasCode: "G504", ucasPoints: "112", year: "2026/27", mode: "Full-time", length: "3 / 4 Years", subject: "Computing" },
    "BSc (Hons) Computer Networks": { type: "Undergraduate", description: "Includes programming, cyber security, information systems and network engineering.", ucasCode: "G420", ucasPoints: "112", year: "2026/27", mode: "Full-time", length: "3 / 4 Years", subject: "Computing" },
    "BSc (Hons) Cyber Security with Forensics": { type: "Undergraduate", description: "Prepare for a career in cyber security by designing protection systems and digital forensics.", ucasCode: "F4G4", ucasPoints: "112", year: "2026/27", mode: "Full-time", length: "3 / 4 Years", subject: "Computing" },
    "BSc (Hons) Computer Science": { type: "Undergraduate", description: "Programming, algorithms, operating systems and software theory.", ucasCode: "G401", ucasPoints: "112", year: "2026/27", mode: "Full-time", length: "3 / 4 Years", subject: "Computing" },
    "BSc (Hons) Computer Science for Games": { type: "Undergraduate", description: "Learn game engine programming, physics, AI and graphics.", ucasCode: "G600", ucasPoints: "112", year: "2026/27", mode: "Full-time", length: "3 / 4 Years", subject: "Computing" },
    "BEng (Hons) Software Engineering": { type: "Undergraduate", description: "Software development, testing and engineering principles.", ucasCode: "G450", ucasPoints: "112", year: "2026/27", mode: "Full-time", length: "3 / 4 Years", subject: "Computing" },

    "BSc (Hons) Computing with Foundation Year": { type: "Foundation Year", description: "A foundation route preparing you for degree-level computing.", ucasCode: "G505", ucasPoints: "64", year: "2026/27", mode: "Full-time", length: "4 / 5 Years", subject: "Computing" },
    "BSc (Hons) Cyber Security with Foundation Year": { type: "Foundation Year", description: "Cyber security fundamentals leading to the full degree.", ucasCode: "F4G5", ucasPoints: "64", year: "2026/27", mode: "Full-time", length: "4 / 5 Years", subject: "Computing" },
    "BSc (Hons) Cyber Security with Forensics with Foundation Year": { type: "Foundation Year", description: "Cyber security and forensics preparation before entering degree level.", ucasCode: "F4G6", ucasPoints: "64", year: "2026/27", mode: "Full-time", length: "4 / 5 Years", subject: "Computing" },
    "BSc (Hons) Computer Science with Foundation Year": { type: "Foundation Year", description: "Programming and maths fundamentals leading to Computer Science.", ucasCode: "G402", ucasPoints: "64", year: "2026/27", mode: "Full-time", length: "4 / 5 Years", subject: "Computing" },
    "BSc (Hons) Computer Science for Games with Foundation Year": { type: "Foundation Year", description: "Entry route into games-focused computer science.", ucasCode: "G601", ucasPoints: "64", year: "2026/27", mode: "Full-time", length: "4 / 5 Years", subject: "Computing" },
    "BEng (Hons) Software Engineering with Foundation Year": { type: "Foundation Year", description: "Develop essential maths and computing skills before progressing to Software Engineering.", ucasCode: "G451", ucasPoints: "64", year: "2026/27", mode: "Full-time", length: "4 / 5 Years", subject: "Computing" },
    "BSc (Hons) Information Technology with Business Studies with Foundation Year": { type: "Foundation Year", description: "Prepares students for IT and business-focused degrees.", ucasCode: "G550", ucasPoints: "64", year: "2026/27", mode: "Full-time", length: "4 / 5 Years", subject: "Computing" },
    "BSc (Hons) Business and Digital Technology with Foundation Year": { type: "Foundation Year", description: "Foundation learning for digital technology and business careers.", ucasCode: "G551", ucasPoints: "64", year: "2026/27", mode: "Full-time", length: "4 / 5 Years", subject: "Computing" },

    "MSc Computing": { type: "Postgraduate", description: "Technical postgraduate conversion course for non-computing graduates.", ucasCode: "", ucasPoints: "", mode: "Part-time", length: "3 Years", year: "2026/27", subject: "Computing" },
    "MSc Cyber Security": { type: "Postgraduate", description: "Advanced cyber security skills including networks, forensics and threat defence.", ucasCode: "", ucasPoints: "", mode: "Full-time", length: "1 Year", year: "2026/27", subject: "Computing" },
    "MPhil Computing and Informatics": { type: "Postgraduate", description: "Research-led computing qualification producing original academic contributions.", ucasCode: "", ucasPoints: "", mode: "Part-time", length: "3 Years", year: "2026/27", subject: "Computing" },

    "BA (Hons) Graphic Design": { type: "Undergraduate", description: "Explore graphic design practices through studio work and design challenges.", ucasCode: "W210", ucasPoints: "112", year: "2026/27", mode: "Full-time", length: "3 / 4 Years", subject: "Design" },
    "BA (Hons) Interior Architecture and Design": { type: "Undergraduate", description: "Design interior spaces using creative and technical approaches.", ucasCode: "W250", ucasPoints: "112", year: "2026/27", mode: "Full-time", length: "3 / 4 Years", subject: "Design" },
    "BA (Hons) Jewellery, Materials and Design": { type: "Undergraduate", description: "Create jewellery through hands-on material experimentation.", ucasCode: "W270", ucasPoints: "112", year: "2026/27", mode: "Full-time", length: "3 / 4 Years", subject: "Design" },
    "BA (Hons) Game Design and Development": { type: "Undergraduate", description: "Game design, storytelling, level design and interactive media.", ucasCode: "W280", ucasPoints: "112", year: "2026/27", mode: "Full-time", length: "3 / 4 Years", subject: "Design" },
    "BA (Hons) Product Design": { type: "Undergraduate", description: "Design creative and functional products.", ucasCode: "W290", ucasPoints: "112", year: "2026/27", mode: "Full-time", length: "3 / 4 Years", subject: "Design" },
    "BSc (Hons) Product Design": { type: "Undergraduate", description: "Technical product design focusing on engineering principles.", ucasCode: "W300", ucasPoints: "112", year: "2026/27", mode: "Full-time", length: "3 / 4 Years", subject: "Design" },
    "BA (Hons) Digital Media Production": { type: "Undergraduate", description: "Video, audio, editing, motion graphics and digital content creation.", ucasCode: "W310", ucasPoints: "112", year: "2026/27", mode: "Full-time", length: "3 / 4 Years", subject: "Design" }
  };

  const openCourseModal = name => {
    const course = coursesData[name];
    if (!course) return;
    modal.querySelector("#course-title").textContent = `${name} (${course.type})`;
    modal.querySelector("#course-description").textContent = course.description || "No description available.";
    modal.querySelector("#course-ucas").textContent = course.ucasCode || course.ucas || "N/A";
    modal.querySelector("#course-points").textContent = course.ucasPoints || course.points || "N/A";
    modal.querySelector("#course-year").textContent = course.year || "N/A";
    modal.querySelector("#course-mode").textContent = course.mode || "N/A";
    modal.querySelector("#course-length").textContent = course.length || "N/A";
    modal.querySelector("#course-subject").textContent = course.subject || "N/A";
    modal.style.display = "flex";
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

 
  document.querySelectorAll(".course-bubble").forEach(bubble => {
    bubble.addEventListener("click", () => {
      const isActive = bubble.classList.contains("active");
      document.querySelectorAll(".course-bubble").forEach(b => b.classList.remove("active"));
      if (!isActive) bubble.classList.add("active");
    });
  });


  document.querySelectorAll(".course-content li").forEach(li => {
    li.addEventListener("click", e => {
      e.stopPropagation();
      const name = li.textContent.trim();
      openCourseModal(name);
    });
  });


  const searchInput = document.getElementById("course-search");
  const searchBtn = document.getElementById("search-btn");
  const searchResults = document.getElementById("search-results");

  if (searchInput && searchResults) {
    const updateResults = () => {
      const q = searchInput.value.trim().toLowerCase();
      searchResults.innerHTML = "";
      if (!q) {
        searchResults.style.display = "none";
        return;
      }

      Object.keys(coursesData).forEach(courseName => {
        if (courseName.toLowerCase().includes(q)) {
          const div = document.createElement("div");
          div.className = "search-result-item";
          div.textContent = courseName;
          div.addEventListener("click", () => {
            openCourseModal(courseName);
            searchInput.value = courseName;
            searchResults.innerHTML = "";
            searchResults.style.display = "none";
          });
          searchResults.appendChild(div);
        }
      });

      searchResults.style.display = searchResults.children.length ? "block" : "none";
    };

    searchInput.addEventListener("input", updateResults);
    searchBtn.addEventListener("click", () => openCourseModal(searchInput.value.trim()));
    searchInput.addEventListener("keydown", e => { if (e.key === "Enter") openCourseModal(searchInput.value.trim()); });

    document.addEventListener("click", e => {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.innerHTML = "";
        searchResults.style.display = "none";
      }
    });
  }


  document.querySelectorAll(".dropdown-header").forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      if (!content) return;
      content.classList.toggle("show");
    });
  });

});


