$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
      $("ul").toggleClass("active").delay(3000);
      $("a").toggleClass("active");
      $("img").toggleClass("active");
      $("html").toggleClass("toggle");
    });
  });
  