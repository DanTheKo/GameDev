
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


document.querySelectorAll(".video-hover").forEach(container => {

    const video = container.querySelector(".project-video");

    let isPlaying = false;


    container.addEventListener("mouseenter", () => {

        video.currentTime = 0;

        video.play().then(() => {

            isPlaying = true;
            container.classList.add("is-playing");

        }).catch(error => {

            console.log("Video playback failed:", error);

        });

    });


    container.addEventListener("mouseleave", () => {

        video.pause();
        video.currentTime = 0;

        isPlaying = false;

        container.classList.remove("is-playing");

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


