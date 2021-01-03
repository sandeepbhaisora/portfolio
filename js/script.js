$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up").addClass("show");
    } else {
      $(".scroll-up").removeClass("show");
    }
  });
});

// slide up script

$(".scroll-up").click(function () {
  $("html").animate({ scrollTop: 0 });
  $("html").css("scrollBehavior", "auto");
});

$(".navbar .menu li a").click(function () {
  // applying again smooth scroll on menu items click
  $("html").css("scrollBehavior", "smooth");
});

$(".navbar .menu li a").on("click", function () {
  $(".navbar .menu").toggleClass("active");
});

// typing animation
var typed = new Typed(".typing", {
  strings: ["a Software Engineer", "an epistemophilic"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// rellax lib

var rellax = new Rellax(".rellax");
