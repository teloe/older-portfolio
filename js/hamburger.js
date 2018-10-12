$(function(){
  
  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
  });
  
  $('.nav-link').click(function(){
    $('.collapse').collapse('hide');
    $(this).toggleClass('open');
});

});