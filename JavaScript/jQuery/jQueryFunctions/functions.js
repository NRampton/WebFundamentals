$(document).ready(function() {
  $('#clicky').click(function() {
    $('#clicky p').css({"background-color": "green"})
  })
  $('#hidey').click(function() {
    $('#hidey p').hide();
  })
  $('#showy').click(function() {
    $('#hidey p').show();
  })
  $('#toggley').click(function() {
    $('#toggley p').toggle();
  })
  $('#slideDowny').click(function() {
    $('#slideDowny h4').slideDown();
  })
  $('#slideUpy').click(function() {
    $('#slideDowny h4').text("Sliding out!");
    $('#slideDowny h4').slideUp();
  })
  $('#slideToggley').click(function() {
    $('#slideToggley p').slideToggle();
  })
  $('#fadeIny').click(function() {
    $('#fadeIny h4').fadeIn();
  })
  $('#fadeOuty').click(function() {
    $('#fadeIny h4').text("Fading out!");
    $('#fadeIny h4').fadeOut();
  })
  $('#addClassy').click(function() {
    $('#addClassy p').addClass("blue_text");
  })
  $('#beforey').click(function() {
    $('#beforey h3').before('<p>Told you so.</p>');
  })
  $('#aftery').click(function() {
    $('#aftery h3').after("<p>And there it is.</p>");
  })
  $('#appendy').click(function() {
    $('#appendy p').append('<p>Here you go.</p>');
  })
  $('#htmly').click(function() {
    $('#htmly').html("<h3>Right on.</h3>");
  })
  $('#attry').click(function() {
    $('#attry p').attr("style", "color: blue")
  })
  $('#valy').click(function() {

  })
  $('#texty').click(function() {
    $('#texty p').text("The old text is no more!");
  })
  $('#datay').click(function() {
    $('#datay p').data("name", "Carlton");
    $('#datay p').append($('#datay p').data("name"));
  })
})
