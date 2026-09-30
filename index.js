
document.querySelectorAll(".gif-hover").forEach(container => {

    const image = container.querySelector(".project-preview");
    const gif = image.dataset.gif;
    const preview = image.src;

    container.addEventListener("mouseenter", () => {
        image.src = gif;
    });

    container.addEventListener("mouseleave", () => {
        image.src = preview;
    });

});

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


