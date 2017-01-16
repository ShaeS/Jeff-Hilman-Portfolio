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
  
  $(".project-button").click(function(e) {
    e.preventDefault();
    $(".projects-popup").children("iframe").attr("src", $(this).siblings("iframe").attr("src"));$(this).siblings("iframe").attr("src")
    $("main").addClass("main-blurred");
    $(".darken-background").addClass("show");
    $(".projects-popup").addClass("show");
  });
  
  $(".darken-background").click(function() {
    $("main").removeClass("main-blurred");
    $(this).removeClass("show");
    $(".projects-popup").removeClass("show");
  });







});