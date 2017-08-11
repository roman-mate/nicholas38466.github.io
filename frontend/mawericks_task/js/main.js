//for form
$(document).ready(function(){
  $('#btn--form').on('click', function(){
    $('.form').addClass('validate');
  });
});

//btn--mobile
$(document).ready(function(){
  $('.btn--mobile').on('click', function(){
    $('.sidebar').addClass('visible');
  });

  $('.btn--close-menu').on('click', function(){
    $('.sidebar').removeClass('visible');
  });


});