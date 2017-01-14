$(document).ready(function () {

  $('.menu-button').click(function (e) {
    e.stopPropagation();
    $('main').toggleClass('menu-open');
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(".menu-button span").text("Close");
    } else {
      $(".menu-button span").text("Menu");
    }
    
    $('.side-nav').click(function (e) {
      e.stopPropagation();
    });
    
    $('body,html').click(function (e) {
      $('main').removeClass('menu-open');
      $(".menu-button").removeClass("active");
      if ($(this).hasClass("active")) {
        $(".menu-button span").text("Close");
      } else {
        $(".menu-button span").text("Menu");
      }
    });
    
  });







});