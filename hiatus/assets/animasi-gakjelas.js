var tl = gsap.timeline();
tl.to(".offline", {
    duration: 1,
    width: ".5rem",
    height: "100px",
    // transformOrigin: "0% 30%",
    ease: "power4.inOut"
})
tl.to(".offline", {
    duration: 1,
    width: "30rem",
    height: "100px",
    // transformOrigin: "0% 30%",
    ease: "expo.inOut"
})
tl.from(".word", {
    duration: 1,
    y: "70%",
    ease: "power4.inOut"
})
tl.from(".kosong-satu", {
    duration: 1,
    height: 0,
    ease: "expo.inOut"
})
gsap.from(".animate-right", {
    duration: 1,
    delay: 1,
    x: 30,
    opacity: 0,
    stagger: .1,
    ease: "expo.out"
})
gsap.from(".rei-ichi", {
    duration: 1,
    delay: 3.5,
    opacity: 0,
    y:30,
    ease: "expo.inOut"
})