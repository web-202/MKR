$(document).ready(function() {
    $('.panel-heading').click(function() {
      var panel = $(this).parent();
  
      if (panel.hasClass('open')) {
        panel.removeClass('open');
      } else {
        $('.panel.open').removeClass('open');
        panel.addClass('open');
      }
    });
  });
  