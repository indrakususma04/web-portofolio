document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       HERO ANIMATION
       =============================== */
    anime({
        targets: '.hero-content > *',
        translateY: [40, 0],
        opacity: [0, 1],
        delay: anime.stagger(200),
        duration: 1000,
        easing: 'easeOutExpo'
    });

    /* ===============================
       ABOUT ANIMATION (SCROLL)
       =============================== */
    const aboutText = document.querySelector('.about-text');

    if (!aboutText) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                /* animasi ketika masuk viewport */
                anime({
                    targets: entry.target,
                    translateY: [40, 0],
                    opacity: [0, 1],
                    duration: 1000,
                    easing: 'easeOutExpo'
                });

            } else {

                /* reset animasi ketika keluar viewport */
                entry.target.style.opacity = 0;
                entry.target.style.transform = "translateY(40px)";

            }

        });

    }, {
        threshold: 0.3
    });

    observer.observe(aboutText);

});