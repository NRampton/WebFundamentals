$(document).ready(function() {
  $('img').click(function() {
    var tempsrc = $(this).attr("src");
    $(this).attr("src", $(this).attr("alt_src"));
    $(this).attr("alt_src", tempsrc);
    var tempalt = $(this).attr("alt");
    $(this).attr("alt", $(this).attr("alt_alt"));
    $(this).attr("alt_alt", tempalt);
  })
})
