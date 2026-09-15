(() => {
    const navbar = document.querySelector(".navbar");
    const toggle = document.querySelector(".navbar__toggle");
    const links = document.querySelectorAll(".navbar__links a");

    if (!navbar || !toggle) return;

    toggle.addEventListener("click", () => {
        navbar.classList.toggle("menu-open");
        toggle.classList.toggle("active");
    });

    links.forEach((link) => {
        link.addEventListener("click", () => {
            navbar.classList.remove("menu-open");
            toggle.classList.remove("active");
        });
    });
})();

(() => {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;
    window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 20);
    });
})();

/* ================================
    REVEAL ANIMATION
================================ */

(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!elements.length) return;

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {

                if (!entry.isIntersecting) return;

                entry.target.classList.add("is-visible");

                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.08
        }
    );

    elements.forEach((element) => {
        observer.observe(element);
    });
})();