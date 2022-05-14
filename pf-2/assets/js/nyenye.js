gsap.registerPlugin(ScrollTrigger);



  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main-container"),
    // reloadOnContextChange: true,
    smooth: true
  });

//   $(".nav-links").on("click", function (e) {

//     locoScroll.scrollTo( 'top', {
//       'offset': 0,
//       'callback': function() {
//         alert("Scrolled");
//       },
//       'duration': 600,
//       'easing': [0.25, 0.00, 0.35, 1.00],
//       'disableLerp': true
//     } );
    

//     e.preventDefault();
// });


const anchorLinks = document.querySelectorAll('a[href^=\\#]:not([href$=\\#])');

anchorLinks.forEach((anchorLink) => {
  let hashval = anchorLink.getAttribute('href');
  let target = document.querySelector(hashval);

  anchorLink.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    locoScroll.scrollTo(target);
  });
});
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main-container", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main-container").style.transform ? "transform" : "fixed"
  });
  
  

var scroll = gsap.timeline();

scroll.to(".fade-gradient", {
  scrollTrigger: {
    trigger: ".hero-section",
    scroller: ".main-container",
    start: "center center",
    end: "bottom center",
    scrub: 0.05,
    // markers: true,
  },
  duration: 1,
  height: "100%"
  // y: -100
})


var aboutAnjay2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    scroller: ".main-container",
    start: "top center",
    end: "bottom center",
    markers: true,
    scrub: 1.5
    // toggleActions: "play none none reverse"
  }
})

aboutAnjay2.to(".arrow1", {
  // duration: 4,
  top: "42em",
  // y: "42em",
  rotate: "45deg",
  ease: "power1.out"
})
var aboutAnjay = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    scroller: ".main-container",
    start: "-15% center",
    end: "bottom center"
    // markers: true,
    // toggleActions: "play none none reverse"
  }
})

aboutAnjay.from(".reveal-text", {
  duration: 1,
  y: 100,
  stagger: 0.07,
  ease: "expo.inOut"
}, .05);
aboutAnjay.from(".soc-links", {
  duration: 1,
  x: -30,
  stagger: 0.07,
  opacity: 0,
  ease: "expo.inOut"
}, .05)
aboutAnjay.from(".bounce", {
  duration: 1,
  y: -50,
  ease: "bounce.out"
}, .1);

aboutAnjay.from(".lines", {
  duration: 1,
  width: "0%",
  ease: "circ.Out"
}, .05);
aboutAnjay.to(".blank-slide", {
  duration: 1,
  transformOrigin: "right",
  scaleX: 0,
  ease: "circ.inOut",
  stagger: 0.3
}, .05);
aboutAnjay.from(".about-desc", {
  duration: 1,
  x: -30,
  color: "rgb(255,255,255, 0)",
  ease: "circ.inOut",
  stagger: 0.3
}, .05);
aboutAnjay.to(".blank-slide-person", {
  duration: 1,
  transformOrigin: "right",
  scaleX: 0,
  ease: "circ.inOut"
}, .05);
aboutAnjay.from(".person", {
  duration: 1.5,
  x: 150,
  scale: 1.2,
  ease: "expo.inOut"
}, .01);



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
