function attach_img_handler() {
  $('img').click(function() {
    var index = $(this).attr('id');
    $.get('https://pokeapi.co/api/v2/pokemon/'+index+'/', function(res) {
      $('#pokedex').html('<h2>'+res.name+'</h2><img id="current" src="https://pokeapi.co/media/img/'+res.id+'.png" alt="'+res.name+'" /><h4>Types:</h4><ul id="typesList"></ul><h4>Height:</h4><p>'+res.height+'</p><h4>Weight:</h4><p>'+res.weight+'</p>'
);
      for (var i = 0; i < res.types.length; i++){
        $('#typesList').append('<li>'+res.types[i].type.name+'</li>');
      }
    }, "json");
  })
}

$(document).ready(function() {
  for (var i = 1; i <= 151; i++) {
    $('#wrapper').append('<img id="'+i+'" src="https://pokeapi.co/media/img/'+i+'.png" alt="Yet another pokemon." />');
  }
  attach_img_handler();
})
