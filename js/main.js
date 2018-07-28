$(function() {
  
  // Smooth scrolling using jQuery easing
  
  $("#nav-about").click(function() {
    $('html, body').animate({
      scrollTop: $("#about").offset().top - 53
    }, 1000, "easeInOutExpo");
  });

  $("#nav-experience").click(function() {
    $('html, body').animate({
      scrollTop: $("#experience").offset().top - 53
    }, 1000, "easeInOutExpo");
  });

  $("#nav-projects").click(function() {
    $('html, body').animate({
      scrollTop: $("#projects").offset().top - 53
    }, 1000, "easeInOutExpo");
  });

  $("#nav-contact").click(function() {
    $('html, body').animate({
      scrollTop: $("#contact").offset().top - 53
    }, 1000, "easeInOutExpo");
  });


  $("#learn-more").click(function() {
    $('html, body').animate({
      scrollTop: $("#about").offset().top - 53
    }, 1000, "easeInOutExpo");
  });








});