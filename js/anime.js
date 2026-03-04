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

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                anime({
                    targets: entry.target,
                    translateY: [40, 0],
                    opacity: [0, 1],
                    duration: 1000,
                    easing: 'easeOutExpo'
                });

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.4
    });

    observer.observe(aboutText);
});