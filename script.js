// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {

    const isOpen = navMenu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Close menu after selecting a navigation link

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";

    });

});


// =========================
// INTERACTIVE SKILLS
// =========================

const skillButtons = document.querySelectorAll(".skill-chip");
const skillDetail = document.getElementById("skill-detail");

skillButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove selection from all buttons

        skillButtons.forEach(item => {
            item.classList.remove("selected");
        });

        // Select clicked button

        button.classList.add("selected");

        // Display its description

        skillDetail.textContent = button.dataset.detail;

    });

});


// =========================
// BACK TO TOP
// =========================

const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {

    backToTop.classList.toggle(
        "visible",
        window.scrollY > 400
    );

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.1
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });

}


// =========================
// ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll("main section[id]");

if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const currentId = entry.target.id;

                navLinks.forEach(link => {

                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${currentId}`
                    );

                });

            }

        });

    }, {
        threshold: 0.35
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

}
