$(function() {
  
  // Smooth scrolling using jQuery easing
  $("#learn-more").click(function() {
    $('html, body').animate({
      scrollTop: $("#projects").offset().top
    }, 1000, "easeInOutExpo");
  });

});