$(document).ready(function() {
  $('form').submit(function() {
    var city = $('#city_field').val();
    $.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&&appid=344143366e48285f89319137af3b0853', function(res) {
      console.log(res.name);
      console.log(res.)
      var temp = res.main.temp;
      temp = (temp - 273) * 1.8 + 32;
      $('h1').text(temp);
    })
    return false;
  })
})
