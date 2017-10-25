// $(document).ready(function() {
//   for (var i = 1; i <= 151; i++) {
//     $('#wrapper').append('<img src="http://pokeapi.co/media/img/'+i+'.png" alt="Yet another pokemon." />')
//   }
// })

$(document).ready(function() {
  $.get("https://pokeapi.co/api/v2/pokemon/45/", function(res) {
      console.log(res);
    }, "json");
})
