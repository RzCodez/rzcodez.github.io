let progress = document.getElementById('progress')
        
        var queue = new createjs.LoadQueue(false);
    
        queue.on("fileload", handleFileComplete);
        queue.on('progress', event => {
            let progress = Math.floor(event.progress * 100);
            let percent = Math.round(event.progress * 100);
            document.getElementById('num-load').innerHTML = percent;
            // let numLoad = Math.round(event.progress * 100);
            // this.numLoad.innerHTML = numLoad + "%";
            // this.progress.style.transform = "scaleX( progress +'%')";
            this.progress.style.transform = `translate(-50%, -50%) scaleX( ${progress}%)`;
            let scrollText = document.querySelector(".container-blocks");
            scrollText.style.transform = "translate(-50%, -150%)";
            document.querySelector(".scrolltextComplete").style.transform = "translateY(0em)";
            if (progress == 100) {
                console.log('all done');
                gsap.to(".line-progress", {
                  duration: 1,
                  delay: 1,
                  // clipPath: "polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)",
                  clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
                  ease: "power3.out"
                })
                setTimeout(function(){
                  scrollText.style.transform = "translate(-50%, -50%)";
                }, 1500)
                setTimeout(function(){
                  document.querySelector(".scrolltextComplete-Load").style.transform = "translateY(-1.3em)";
                }, 500)
            }
        })
        queue.on('complete', event => {
          let image = document.querySelectorAll("img")
          image.forEach(img => {
            img.addEventListener("contextmenu", (event) => {
              event.preventDefault();
            })
          })
            var cp = gsap.timeline()
    cp.to(".transition1", {
        duration: 1,
        clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "power4.inOut"
    }, 1.6)
    setTimeout(() => {
        document.querySelector(".transition1").style.display= "none";
    }, 500000)
    cp.from(".animate-load", {
        y: "10px",
        opacity: 0,
        duration: 1,
        ease: "circ.out",
        stagger: .1
    }, 2)
    var navColor = gsap.timeline()
    navColor.to(".colorGSAP", {
      duration: .5,
      ease: "none",
      color: "#fff",
      stagger: .1
    }, 2.5)
    cp.from(".bounce-title", {
      duration: 1,
      y: -40,
      opacity: 0,
      ease: "bounce.out"
    }, 2.4)
    const text = new SplitType('.reveal-text-ramz', {
      types: 'chars',
      absolute: false
    })
    var textBlinking = gsap.timeline();
    textBlinking.from(text.chars, {
      duration: .3,
      // y: 150,
      opacity: 0,
      // color: "#DC143C",
      stagger: 0.1,
      ease: "none"
    }, 2.3)
    var textBlinkingGreen = gsap.timeline();
    textBlinkingGreen.to(text.chars, {
      duration: .3,
      color: "#fff",
      stagger: .1,
      ease: "none"
    }, 2.9)
    cp.from(".lines-ramz", {
      duration: 1,
      scaleX: 0,
      transformOrigin: "left",
      ease: "expo.inOut"
    }, 3.5)
        })
        queue.loadFile('https://s3.amazonaws.com/coursetro/stuff/mountains-clouds.jpg');
        queue.loadFile('https://s3.amazonaws.com/coursetro/stuff/adventure-alpine-alps-714258.jpg');
        queue.loadFile('https://s3.amazonaws.com/coursetro/stuff/170407220921-07-iconic-mountains-pitons-restricted.jpg');
        queue.loadFile('https://s3.amazonaws.com/coursetro/stuff/170407220916-04-iconic-mountains-matterhorn-restricted.jpg');

        function handleFileComplete(event) {
          
        var item = event.item; 
        var type = item.type;


        }


// $("html").scrollWithEase({
//     frameRate: 60,
//     animationTime: 1500,
//     pulseAlgorithm: true,
//     pulseScale: 9,
//     pulseNormalize: 1,
//     accelerationMax: 10,
//     accelerationDelta: 20,
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

const avWorkInner = document.querySelector(".availableWorkInner");
avWorkInner.addEventListener("mouseenter", () =>{
  let arrowBlinks = document.querySelectorAll(".arrow-blink");
  arrowBlinks.forEach(arrowBlink =>{
    arrowBlink.classList.add("blink");
    arrowBlink.classList.remove("d-none");
  })
})
avWorkInner.addEventListener("mouseleave", () =>{
  let arrowBlinks = document.querySelectorAll(".arrow-blink");
  arrowBlinks.forEach(arrowBlink =>{
    arrowBlink.classList.remove("blink");
    arrowBlink.classList.add("d-none");
  })
})

