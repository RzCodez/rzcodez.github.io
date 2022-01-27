console.clear();

gsap.registerPlugin(ScrollTrigger);


// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".viewport"),
  smooth: true,
  smartphone: {
    smooth: true
  },
  tablet: {
    smooth: true
  }
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".viewport", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".viewport").style.transform ? "transform" : "fixed"
});


gsap.to(".go-back", {
  scrollTrigger: {
    trigger: ".go-back",
    scroller: ".viewport"
  },
  duration: 1,
  delay: 8,
  x: 300,
  ease: "expo.inOut"
})
gsap.from(".relax-info", {
    scrollTrigger: {
      trigger: ".relax-info",
      scroller: ".viewport"
    },
    x: 300,
    duration: 2,
    ease: "expo.inOut"
})

gsap.to(".line-progress-info", {
    scrollTrigger: {
      trigger: ".line-progress-info",
      scroller: ".viewport"
    },
    duration: 8,
    scaleY: 1,
    ease: "linear"
})
gsap.from(".animating-image", {
    scrollTrigger: {
      trigger: ".animating-image",
      scroller: ".viewport"
    },
    duration: 1.3,
    width: 0,
    ease: "Power4.easeOut"
})
gsap.to(".scale-animate", {
    scrollTrigger: {
      trigger: ".scale-animate",
      scroller: ".viewport"
    },
    duration: 1,
    delay: .60,
    scale: 1.1,
    ease: "Power4.easeInOut"
})
gsap.to(".dotted-pattern", {
  scrollTrigger: {
    trigger: ".projects-collection",
    scroller: ".viewport",
    markers: true,
    scrub: 1,
    toggleActions: "play reverse none restart",
    start: "top center",
    end: "bottom center"
  },
  duration: 1,
  x: "80%",
  ease: "Power4.easeInOut"
})
gsap.to(".dotted-pattern2", {
  scrollTrigger: {
    trigger: ".projects-collection",
    scroller: ".viewport",
    markers: true,
    scrub: 1,
    toggleActions: "play reverse none reverse",
    start: "top center",
    end: "bottom center"
  },
  duration: 1,
  y: "50%",
  ease: "Power4.easeInOut"
})

gsap.from(".anim-text", {
    scrollTrigger: {
      trigger: ".anim-text",
      scroller: ".viewport"
    },
    duration: 1.3,
    opacity: 0,
    y: 5,
    stagger: 0.3,
    ease: "Power4.easeOut"
})


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
