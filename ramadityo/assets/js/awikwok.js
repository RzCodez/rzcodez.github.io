// var tl = gsap.timeline()

// tl.from(".text", {
//     duration: 1,
//     delay: 0,
//     stagger: 0.03,
//     ease: "Power4.easeOut",
//     y: 200
// })
// tl.to(".text", {
//     duration: 1,
//     delay: 1.5,
//     stagger: 0.03,
//     ease: "Power4.in",
//     y: -200
// })
// tl.to(".page-load", {
//     duration: 1,
//     delay: 1,
//     y: -1000,
//     ease: "power1.out"
// })

gsap.from(".text", {
    duration: 1,
    delay: 0,
    stagger: 0.03,
    opacity: 1,
    ease: "Power4.easeOut",
    y: 200
})
gsap.to(".text", {
    duration: 1,
    delay: 2,
    stagger: 0.03,
    ease: "power4.inOut",
    y: -200
})
gsap.to(".page-load", {
    duration: 1,
    delay: 2.5,
    y: -1000,
    ease: "power4.inOut"
})