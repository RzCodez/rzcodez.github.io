var McButton = $("[data=hamburger-menu]");
var McBar1 = McButton.find(".span:nth-child(1)");
var McBar2 = McButton.find(".span:nth-child(2)");
var McBar3 = McButton.find(".span:nth-child(3)");

McButton.click(function () {
  $(this).toggleClass("active");

  if (McButton.hasClass("active")) {
    McBar1.velocity({ top: "50%" }, { duration: 200, easing: "swing" });
    McBar3.velocity(
      { top: "50%" },
      { duration: 200, easing: "swing" }
    ).velocity(
      { rotateZ: "90deg" },
      { duration: 800, delay: 200, easing: [500, 20] }
    );
    McButton.velocity(
      { rotateZ: "135deg" },
      { duration: 800, delay: 200, easing: [500, 20] }
    );
  } else {
    McButton.velocity("reverse");
    McBar3.velocity(
      { rotateZ: "0deg" },
      { duration: 800, easing: [500, 20] }
    ).velocity({ top: "100%" }, { duration: 200, easing: "swing" });
    McBar1.velocity("reverse", { delay: 800 });
  }
});

const hamburger = $(".menu");
var tl = new TimelineMax()
  .from(".animate-navbar-mobile",{ 
    stagger: 0.3,
    duration: 0.5,
    opacity: 0,
    // delay: 2.8,
    ease: "Power4.easeOut",
    y: 10
})
.reverse();
hamburger.click(function(){
    $(".span").toggleClass("toggle");
    $("ul").toggleClass("toggle");
    $("html").toggleClass("hidden");
    // $(".about").toggleClass("hidden");
    // $(".myskills").toggleClass("hidden");
    // $(".myJourney").toggleClass("hidden");
    // $(".contact-section").toggleClass("hidden");
    // $(".projects-collection").toggleClass("hidden");
    // $(".half-circle1").toggleClass("hidden");
    // $(".half-circle2").toggleClass("hidden");
    // $(".svg-waves").toggleClass("hidden");
    // $("footer").toggleClass("hidden");
    gsap.to("body", {
      duration: .5,
      height: "100vh",
      ease: "Expo.easeInOut"
  })
    tl.reversed(!tl.reversed());
})