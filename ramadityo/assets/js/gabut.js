const animationRubber = document.querySelectorAll(".animating-rubberBand");

animationRubber.forEach(function(animasiRubber){
  animasiRubber.addEventListener("mouseout", function () {
    setTimeout(function () {
      animasiRubber.classList.remove(
        "animate__animated",
        "animate__rubberBand"
      );
    }, 1200);
  });
  animasiRubber.addEventListener("mouseover", function () {
    animasiRubber.classList.add("animate__animated", "animate__rubberBand");
  });
});
