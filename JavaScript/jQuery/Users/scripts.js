$(document).ready(function(){
  $('form').submit(function(){
    var fname = $('#first_name').val();
    var lname = $('#last_name').val();
    var email = $('#email_address').val();
    var num = $('#phone').val();
    $('tbody').append('<tr id="last"></tr>');
    $('#last').append("<td></td>");
    $('#last td:last-child').text(fname);
    $('#last').append("<td></td>");
    $('#last td:last-child').text(lname);
    $('#last').append("<td></td>");
    $('#last td:last-child').text(email);
    $('#last').append("<td></td>");
    $('#last td:last-child').text(num);
    $('#last').removeAttr('id');
    return false;
  })

})
