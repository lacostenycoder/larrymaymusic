$(document).ready(function(){
  $('#sendEmail').click(function(e) {
    var data = $("form").serializeArray();
    var name = data[0].value;
    var email = data[1].value;
    var message = data[2].value;
    var response = "You're email has been sent... we think.";
    $.ajax({
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      type: 'POST',
      data: {
        'key': 'vxg_k3DyFC46DMI2PhHQqA',
        'message': {
          'from_name': name,
          'from_email': email,
          'to': [
              {
                'email': 'larrymayday@gmail.com',
                'name': 'Larry May',
                'type': 'to'
              },
              {
                'email': 'djlancejordan@gmail.com',
                'name': 'ANOTHER RECIPIENT NAME (OPTIONAL)',
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': 'from LarryMayMusic.com',
          'html': message
        }
      }
     }).done(function(response) {
       alert(response); // if you're into that sorta thing
     });
  });
});
