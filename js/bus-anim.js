document.addEventListener("DOMContentLoaded", () => {

    gsap.from(".emirate-card", {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out"
    });
});
