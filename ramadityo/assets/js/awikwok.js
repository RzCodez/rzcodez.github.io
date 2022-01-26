
// gsap.from(".page-load", {
//     duration: 1.5,
//     opacity: 0,
//     ease: "Expo.easeInOut"
// })
// bodyNoScroll.classList.add("no-scroll");
// gsap.to(".viewport", {
//     duration: .5,
//     height: 0,
//     ease: "Expo.easeInOut"
// })
$(window).on('load', function() {
    // function progress(){
    //     var percent = document.querySelector('.percent');
    //     var progress = document.querySelector('.progress');
    //     var text = document.querySelector('.text');
    //     var count = 4;
    //     var per = 16;
    //     var loading = setInterval(animate, 50);
    //     function animate(){
    //         if(count == 100 && per == 400){
    //             percent.classList.add("text-blink");
    //             text.style.display = "block";
    //             clearInterval(loading);
    //         }else{
    //             per = per + 4;
    //             count = count + 1;
    //             progress.style.width = per + 'px';
    //             percent.innerText = count + '%';
    //         }
    //     }
    // }
    // progress();
    // gsap.to(".viewport", {
    //     duration: .5,
    //     height: "100vh",
    //     ease: "Expo.easeInOut"
    // })
    gsap.to("body", {
        duration: .5,
        height: "100vh",
        ease: "Expo.easeInOut"
    })
    gsap.to(".animate-slide-up", {
        duration: 1.7,
        // delay: 2.5,
        stagger: 0.1,
        y: -1500,
        ease: "Power4.easeInOut"
    })
    setTimeout(function() {
        document.querySelector(".page-load").style.display = "none";
    }, 5000)
    var navbarAnimate = gsap.timeline({delay: 1});
    navbarAnimate.from(".animate-navbar", {
        stagger: 0.3,
        duration: 0.5,
        opacity: 0,
        // delay: 2.8,
        ease: "Power4.easeOut",
        y: 10
    })

    gsap.from(".recommended-view", {
        delay: 1.5,
        duration: 1,
        y: 300,
        ease: "power4.inOut"
    })

    gsap.from(".animate-profile", {
        duration: 1,
        delay: 1,
        opacity: 0,
        x: 20,
        ease: "Power4.easeOut"
    })
    document.querySelector(".recommended-view").style.display = "flex";
    document.querySelector(".blank-white").style.backgroundColor = "crimson";
    $(".viewport").fadeIn(1000);

    gsap.from(".appear-text", {
        duration: 1,
        delay: .9,
        y: 100,
        stagger: 0.1,
        ease: "Power3.easeInOut"
    })
});

document.querySelector(".recommended-view").style.display = "none";

// Accept Button
const accept = document.querySelector(".accept");
accept.addEventListener('click', () =>{
    gsap.to(".recommended-view", {
        delay: 0,
        duration: 1,
        y: 300,
        ease: "power4.inOut"
    })

    setTimeout(function() {
        document.querySelector(".recommended-view").style.display = "none";
    }, 2000)
})


// gsap.registerPlugin(ScrollTrigger);


// gsap.from(".relax-info", {
//     scrollTrigger: ".relax-info",
//     x: 300,
//     duration: 2,
//     ease: "expo.inOut"
// })

// gsap.to(".line-progress-info", {
//     scrollTrigger: ".line-progress-info",
//     duration: 8,
//     scaleY: 1,
//     ease: "linear"
// })

// gsap.from(".animating-image", {
//     scrollTrigger: ".animating-image",
//     duration: 1.3,
//     width: 0,
//     scroller:".scrollContainer",
//     ease: "Power4.easeOut"
// })
// gsap.to(".scale-animate", {
//     scrollTrigger: ".scale-animate",
//     duration: 1,
//     delay: .60,
//     scale: 1.1,
//     scroller:".scrollContainer",
//     ease: "Power4.easeInOut"
// })
// gsap.from(".anim-text", {
//     scrollTrigger: ".anim-text",
//     duration: 1.3,
//     opacity: 0,
//     y: 5,
//     stagger: 0.3,
//     scroller:".scrollContainer",
//     ease: "Power4.easeOut"
// })
