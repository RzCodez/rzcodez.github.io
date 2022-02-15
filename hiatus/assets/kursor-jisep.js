var cursor = $(".cursor"),
    follower = $(".cursor-follower"),
    follower2 = $(".cursor-follower2"),
    image = $(".image");
TweenMax.set(".cursor-follower", {
  xPercent: -50,
  yPercent: -50
});
TweenMax.set(".cursor-follower2", {
    xPercent: -50,
    yPercent: -50
});
TweenMax.set("img", {
    xPercent: -90,
    yPercent: 20
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
  TweenMax.to("img", 0.4, {
    x: e.clientX,
    y: e.clientY,
    ease: "power4.easeOut"
  });
}

var cursorAnime = new TimelineMax()
    .from(".cursor-follower2",{ 
        duration: 0.3,
        scale: 1,
        ease: "Expo.inOut",
    })
    .reverse();
$(".word").on("mouseenter", function(e) {
    $(".cursor-follower2").addClass("border-none");
    cursorAnime.reversed(!cursorAnime.reversed());
    $(".cursor-follower").addClass("opacity-none");
})

$(".word").on("mouseleave", function(e) {
    $(".cursor-follower2").removeClass("border-none");
    cursorAnime.reversed(!cursorAnime.reversed());
    $(".cursor-follower").removeClass("opacity-none");
})

$(".container-word").on("mouseenter", function(e) {
    $(".cursor-follower2").addClass("border-none");
    $(".cursor-follower").addClass("opacity-none");
})

$(".container-word").on("mouseleave", function(e) {
    $(".cursor-follower2").removeClass("border-none");
    $(".cursor-follower").removeClass("opacity-none");
})

$(".exclution").on("mouseenter", function(e) {
    $(".cursor-follower2").addClass("border-none");
    $(".cursor-follower").addClass("opacity-none");
})
$(".exclution").on("mouseleave", function(e) {
    $(".cursor-follower2").removeClass("border-none");
    $(".cursor-follower").removeClass("opacity-none");
})

$(".link1").on("mouseenter", function(e) {
    $(".image-2").addClass("opacity-full");
})
$(".link1").on("mouseleave", function(e) {
    $(".image-2").removeClass("opacity-full");
})
$(".link2").on("mouseenter", function(e) {
    $(".image-1").addClass("opacity-full");
})
$(".link2").on("mouseleave", function(e) {
    $(".image-1").removeClass("opacity-full");
})
$(".link3").on("mouseenter", function(e) {
    $(".image-3").addClass("opacity-full");
})
$(".link3").on("mouseleave", function(e) {
    $(".image-3").removeClass("opacity-full");
})