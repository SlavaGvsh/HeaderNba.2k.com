$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__nav").toggleClass("active");
    $("body").toggleClass("lock");
  });
  $(".drop-btn > .nav__link").click(function (event) {
   $(this).next('.dropdown').toggleClass("active");
   $(this).toggleClass("active");
  });
  $(".drop-btn1 > .nav__link").click(function (event) {
    $(".sub-dropdown").toggleClass("active");
    $(this).toggleClass("active");
  });
});
