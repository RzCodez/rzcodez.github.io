var cursor = $(".cursor"),
    follower = $(".cursor-follower"),
    follower2 = $(".cursor-follower2"),
    image = $(".image");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;
    
    TweenMax.set(follower, {
        css: {    
        left: posX - 15,
        top: posY - 14
        }
    });
      
    TweenMax.set(follower2, {
        css: {    
        left: posX - 12,
        top: posY - 12
        },
        delay: .03,
        ease: "Expo.easeOut"
    });
 
    TweenMax.set(cursor, {
        css: {    
        left: mouseX,
        top: mouseY
        }
    });
  }
});

$(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

$(".word").on("mouseenter", function(e) {
    $(".cursor-follower2").addClass("bigger border-none");
    $(".cursor-follower").addClass("opacity-none");
})

$(".word").on("mouseleave", function(e) {
    $(".cursor-follower2").removeClass("bigger border-none");
    $(".cursor-follower").removeClass("opacity-none");
})

$(".container-word").on("mouseenter", function(e) {
    $(".cursor-follower2").addClass("bigger border-none");
    $(".cursor-follower").addClass("opacity-none");
})

$(".container-word").on("mouseleave", function(e) {
    $(".cursor-follower2").removeClass("bigger border-none");
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