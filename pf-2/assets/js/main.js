

// $("html").scrollWithEase({
//     frameRate: 60,
//     animationTime: 1500,
//     pulseAlgorithm: true,
//     pulseScale: 9,
//     pulseNormalize: 1,
//     accelerationMax: 10,
//     accelerationDelta: 20,
// });


// let progress = document.getElementById('progress');
// let gallery = document.getElementById('gallery');

// var queue = new createjs.LoadQueue(false);

// paceOptions = {
//     ajax: true,
//     document: true,
//     eventLag: false,
// };


Pace.on("done", () =>{
    var cp = gsap.timeline();
    cp.to(".loading-text", {
      duration: .5,
      text: {
        value: "WELCOME",
        ease: "expo.inOut"
      }
    })
    cp.to(".block-white", {
      duration: .5,
      opacity: 1,
      backgroundColor: "whitesmoke",
      ease: "circ.out"
    })
    
    cp.to(".transition1", {
        duration: 1,
        clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        // ease: "circ.out"
        ease: "power4.inOut"
    }, 1)
    setTimeout(() => {
        document.querySelector(".transition1").style.display= "none";
    }, 5000)

    cp.from(".animate-load", {
        y: "10px",
        opacity: 0,
        duration: .5,
        ease: "circ.out",
        stagger: .2
    }, 2);
    cp.from(".lines-ramz", {
      duration: 1,
      scaleX: 0,
      transformOrigin: "left",
      ease: "expo.inOut"
    }, 2.3);
    cp.from(".bounce-title", {
      duration: 1,
      y: -40,
      opacity: 0,
      ease: "bounce.out"
    }, 2.4)
    const text = new SplitType('.reveal-text-ramz', {
      types: 'chars',
      absolute: true
    })
    gsap.from(text.chars, {
      duration: 2,
      y: 150,
      // transform: "rotateY(3.142rad)",
      // opacity: 0,
      stagger: 0.03,
      ease: "expo.inOut"
    }, 1.4)
})
// $(".FxFP").ripples({
//     imageUrl: null,
//     resolution: 300,
//     dropRadius: 500,
//     perturbance: 0.01,
//     interactive: true,
//     crossOrigin: ''
// });

var cursor = $(".cursor"),
    follower = $(".cursor-follower"),
    follower2 = $(".cursor-follower2"),
    image = $(".image-cursor");
TweenMax.set(".cursor-follower", {
  xPercent: -50,
  yPercent: -50
});
TweenMax.set(".cursor-follower2", {
    xPercent: -50,
    yPercent: -50
});
window.addEventListener("mousemove", moveCircle);

function moveCircle(e) {
  TweenMax.to(".cursor-follower", 0.3, {
    stagger: .3,
    x: e.clientX,
    y: e.clientY
  });
  TweenMax.to(".cursor-follower2", 0.4, {
    x: e.clientX,
    y: e.clientY,
    ease: "power4.easeOut"
  });
}

var cursorAnime = new TimelineMax()
    .from(".cursor-follower2",{ 
        duration: 0.1,
        scale: 1,
        ease: "circ.out",
    })
    .reverse();


$(".FxFP").on("mouseenter", function(e) {
    $(".cursor-follower2").addClass("fill-on");
    cursorAnime.reversed(!cursorAnime.reversed());
    $(".cursor-follower").addClass("opacity-none");
})

$(".serif").on("mouseenter", function(e) {
  $(".cursor-follower2").addClass("fill-on");
    cursorAnime.reversed(!cursorAnime.reversed());
    $(".cursor-follower").addClass("opacity-none");
})

$(".serif").on("mouseleave", function(e) {
  $(".cursor-follower2").removeClass("fill-on");
    cursorAnime.reversed(!cursorAnime.reversed());
    $(".cursor-follower").removeClass("opacity-none");
})

$(".FxFP").on("mouseleave", function(e) {
    $(".cursor-follower2").removeClass("fill-on");
    cursorAnime.reversed(!cursorAnime.reversed());
    $(".cursor-follower").removeClass("opacity-none");
})

$(".exclution").on("mouseenter", function(e) {
    $(".cursor-follower2").addClass("fill-on");
    $(".cursor-follower").addClass("opacity-none");
})
$(".exclution").on("mouseleave", function(e) {
    $(".cursor-follower2").removeClass("fill-on");
    $(".cursor-follower").removeClass("opacity-none");
})

const animationRubber = document.querySelectorAll(".animating-Text");

animationRubber.forEach(function(animasiRubber){
  animasiRubber.addEventListener("mouseout", function () {
    setTimeout(function () {
      animasiRubber.classList.remove(
        "animate__animated",
        "animate__jello"
      );
    }, 1200);
  });
  animasiRubber.addEventListener("mouseover", function () {
    animasiRubber.classList.add("animate__animated", "animate__jello");
  });
});

