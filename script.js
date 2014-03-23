$(document).ready(function(){
  $window = $(window);
  $header = $('header');
  $nav = $('nav');

  $window.scroll(function(){
    if($window.scrollTop() > 20) {
      $header.addClass('scrolled');
    } else {
      $header.removeClass('scrolled');
    }
  });
  $('.nav-toggle').click(function(e){
    if ($nav.is(':visible')) {
      $('nav').slideUp(100);
    } else {
      $('nav').slideDown(150);
    }
  });
})
