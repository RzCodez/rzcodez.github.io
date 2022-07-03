gsap.registerPlugin(ScrollTrigger);



  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main-container"),
    // reloadOnContextChange: true,
    smooth: true
  })

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


const anchorLinks = document.querySelectorAll('a[href^=\\#]:not([href$=\\#])')

anchorLinks.forEach((anchorLink) => {
  let hashval = anchorLink.getAttribute('href');
  let target = document.querySelector(hashval);

  anchorLink.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    locoScroll.scrollTo(target);
  });
})

  locoScroll.on("scroll", ScrollTrigger.update);
  
  ScrollTrigger.scrollerProxy(".main-container", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    
    pinType: document.querySelector(".main-container").style.transform ? "transform" : "fixed"
  })
  
  

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
    markers: false,
    scrub: 1.5
    // toggleActions: "play none none reverse"
  }
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
  stagger: 0.03,
  ease: "expo.inOut"
}, .05)
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
}, .1)

aboutAnjay.from(".lines", {
  duration: 1.5,
  width: "0%",
  ease: "expo.inOut"
}, .2)
aboutAnjay.to(".blank-slide", {
  duration: 1,
  transformOrigin: "right",
  scaleX: 0,
  ease: "circ.inOut",
  stagger: 0.3
}, .05)
aboutAnjay.from(".about-desc", {
  duration: 1,
  x: -30,
  color: "rgb(255,255,255, 0)",
  ease: "circ.inOut",
  stagger: 0.3
}, .05)
aboutAnjay.to(".blank-slide-person", {
  duration: 1,
  transformOrigin: "right",
  scaleX: 0,
  ease: "power3.inOut"
}, .05)
aboutAnjay.from(".person", {
  duration: 1,
  x: -100,
  scale: 1.2,
  ease: "power4.inOut"
}, .01)

var projectCont = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects",
    scroller: ".main-container",
    start: "-10% center",
    end: "bottom center",
    markers: false
    // toggleActions: "play none none reverse"
  }
})

projectCont.from(".pr-text", {
  duration: 1,
  y: 100,
  stagger: 0.05,
  ease: "power4.out"
}, .4)
projectCont.from(".pr-desc", {
  duration: 1,
  x: -30,
  opacity: 0,
  ease: "circ.inOut"
}, 1.3)
projectCont.from(".lines-title-project",{
  duration: 1,
  scaleX: 0,
  transformOrigin: "left",
  ease: "expo.inOut"
})
projectCont.from(".pr-bounce", {
  duration: 1,
  y: -50,
  ease: "bounce.out"
})
projectCont.from(".project-desc", {
  duration: 1.5,
  // x: "-30vw",
  // stagger: 0.05,
  ease: "power4.inOut"
}, .5)

projectCont.to(".roll-image-showcase", {
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
}, 1)
projectCont.from(".pr-tag-text", {
  duration: 1,
  opacity: 0,
  stagger: 0.2,
  ease: "power1.out"
}, 1.8)
projectCont.from(".pr-num", {
  text: "xyz",
  duration: 2,
  opacity: 0,
  x: -20,
  ease: "power4.inOut"
}, 1.5)



var bannerImg = gsap.timeline({
  scrollTrigger: {
    trigger: ".banner-project",
    scroller: ".main-container",
    start: "-85% center",
    end: "150% center",
    // markers: true,
    scrub: .5
    // toggleActions: "play none none reverse"
  }
})


bannerImg.to(".banner-image", {
  // y: "30%",
  backgroundPosition: "center 100%"
  // ease: "power2.out"
});
const titleContact = new SplitType('.title-contact', {
  types: 'chars',
  absolute: false
})
var contactSec = gsap.timeline({
  scrollTrigger: {
    trigger: ".contacts",
    scroller: ".main-container",
    start: "-12% center",
    end: "bottom center",
    markers: true,
    toggleActions: "play none none reverse"
  }
})
contactSec.from(titleContact.chars, {
  duration: 1,
  x: -30,
  opacity: 0,
  rotateY: "-90deg",
  // color: "#DC143C",
  stagger: 0.1,
  ease: "circ.out"
}, 0)
contactSec.from(".subtitle-contact", {
  duration: .5,
  x: -20,
  opacity: 0,
  // stagger: 0.05,
  // y: "-1.3em",
  ease: "circ.out"
}, 1)
contactSec.from(".contact-info", {
  duration: .5,
  x: -20,
  opacity: 0,
  stagger: 0.05,
  // y: "-1.3em",
  ease: "circ.out"
}, 1.3)



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
