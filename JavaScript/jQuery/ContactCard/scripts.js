function addHandlers() {
  $('.card').click(function() {
    var descrip = $(this).attr('desc');
    $(this).children('h5').text(descrip);
  })
}

$(document).ready(function() {
  $('#mainform').submit(function() {
    var fname = $('#first_name').val();
    var lname = $('#last_name').val();
    var desc = $('#description').val();
    $('#cards').append('<div class="card" desc="'+desc+'"><span>'+fname+'</span>&nbsp;<span>'+lname+'</span><h5>(Click here for a description)</h5></div>');
    addHandlers();
    return false;
  })
})
