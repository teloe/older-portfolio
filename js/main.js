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

   // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);








});