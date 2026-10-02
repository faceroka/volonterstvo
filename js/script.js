/* =========================
   MOBILE MENU
========================= */

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

if (menuButton) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("nav--open");

        menuButton.classList.toggle("active");

    });

}


/* =========================
   CLOSE MENU AFTER CLICK
========================= */

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("nav--open");

    });

});


/* =========================
   HEADER SCROLL
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.classList.add("header--scrolled");

    } else {

        header.classList.remove("header--scrolled");

    }

});


/* =========================
   SIMPLE REVEAL ANIMATION
========================= */

const animatedElements = document.querySelectorAll(
    ".choice-card, .direction, .project, .news-card, .stat"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.1
    }
);


animatedElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});


/* =========================
   SMOOTH ANCHOR
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});