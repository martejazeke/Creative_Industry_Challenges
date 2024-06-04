window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

gsap.registerPlugin(ScrollTrigger);

gsap.from('.nav_container', 1, {
    opacity:0,
    y:20
})

gsap.from('.hero-text', 1, {
    opacity: 0,
    y: 40,
    delay:.5
})

gsap.from('.hero-desc', 1, {
    opacity: 0,
    y: 40,
    delay:.75
})

gsap.from('.bus-img', 1,{
    opacity: 0,
    x:150,
    scrollTrigger: {
        trigger: ".hero-text",
        start: "70% center",
        end: "bottom-center",
    }
})

gsap.from('.abt_bus_container', 1, {
    opacity: 0,
    x:-150,
    scrollTrigger: {
        trigger: ".hero-text",
        start: "70% center",
        end: "bottom-center",
    }
})

gsap.from('.flight-img', 1,{
    opacity: 0,
    x:-150,
    scrollTrigger: {
        trigger: ".abt_bus_title",
        start: "top-center",
        end: "bottom-center",
    }
})

gsap.from('.abt_flight_title', 1,{
    opacity: 0,
    x:150,
    scrollTrigger: {
        trigger: ".abt_bus_title",
        start: "70% center",
        end: "bottom-center",
    }
})

gsap.from('.abt_flight_desc', 1,{
    opacity: 0,
    x:150,
    delay: .5,
    scrollTrigger: {
        trigger: ".abt_bus_title",
        start: "70% center",
        end: "bottom-center",
    }
})

gsap.from('.flight_btn', 1,{
    opacity: 0,
    x:150,
    delay: 1,
    scrollTrigger: {
        trigger: ".abt_bus_title",
        start: "70% center",
        end: "bottom-center",
    }
})

gsap.from('.taxi-img', 1,{
    opacity: 0,
    x:150,
    scrollTrigger: {
        trigger: ".abt_flight_desc",
        start: "80% center",
        end: "bottom-center",
    }
})

gsap.from('.abt_taxi_title', 1,{
    opacity: 0,
    x:-150,
    scrollTrigger: {
        trigger: ".abt_flight_desc",
        start: "70% center",
        end: "bottom-center",
    }
})

gsap.from('.abt_taxi_desc', 1,{
    opacity: 0,
    x:-150,
    delay: .5,
    scrollTrigger: {
        trigger: ".abt_flight_desc",
        start: "70% center",
        end: "bottom-center",
    }
})

gsap.from('.taxi_btn', 1,{
    opacity: 0,
    x:-150,
    delay: 1,
    scrollTrigger: {
        trigger: ".abt-flight-desc",
        start: "50% center",
        end: "bottom-center",
    }
})