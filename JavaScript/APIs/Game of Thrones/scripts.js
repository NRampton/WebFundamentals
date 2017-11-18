$(document).ready(function() {
  $('img').click(function() {
    var id = $(this).attr('id');
    $.get('https://www.anapioficeandfire.com/api/houses/' + id, function(res) {
      $('#name').text('Name: ' +res.name );
      $('#words').text('Words: ' +res.words );
      $('#region').text('Region: ' +res.name );
      $('#founded').text('Founded: ' +res.name );
      $('#titles').text('Titles: ' +res.name );
    })
  })
});
