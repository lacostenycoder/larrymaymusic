$(document).ready(function(){
  $('#sendEmail').click(function(e) {
    var data = $("form").serializeArray();
    var name = data[0].value;
    var email = data[1].value;
    var message = data[2].value;
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
                'name': 'Webmaster)',
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': 'message from LarryMayMusic.com',
          'html': message
        }
      }
     }).done(function(response) {
       if (response[0].reject_reason) {
         alert("Email error, please enter a valid email address.");
       } else {
         alert("You're email has been sent!");
         window.scrollTo(0, top);
       }
     });
  });
});
