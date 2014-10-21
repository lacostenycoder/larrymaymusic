$(document).ready(function(){
  $('.navbar-collapse a').on('click',function (e) {
    if($('.navbar-toggle').css('display') == 'block' && !$(this).siblings().length){
      $('.navbar-collapse').collapse('toggle');
    }
  });

 $('li img').on('click',function(){
  var src = $(this).attr('src');
  var img = '<img src="' + src + '" class="img-responsive center-block gallery-popup"/>';

  //Start of new code
  var index = $(this).parent('li').index();
  var html = '';
  html += img;
  // html += '<div style="height:25px;">';
  html += '<a class="controls next btn btn-default clear-left" href="'+ (index+2) + '"> <i class="glyphicon glyphicon-chevron-right"></i> </a>';
  html += '<button type="button" class="btn btn-default center-block" data-dismiss="modal">  <i class="glyphicon glyphicon-remove"></i> </button>';
  html += '<a class="controls previous btn btn-default left-block" href="' + (index) + '"> <i class="glyphicon glyphicon-chevron-left"></i> </a>';
  html += '</div>';
  //End of new code

  $('#myModal').modal();
  $('#myModal').on('shown.bs.modal', function(){
    $('#myModal .modal-body').html(html);
    //this will hide or show the right links:
    $('a.controls').trigger('click');
  });
  $('#myModal').on('hidden.bs.modal', function(){
    $('#myModal .modal-body').html('');
  });
 });

  //fix chrome zoom text issue
  if ((navigator.userAgent.match(/Android/i)) && (navigator.userAgent.toLowerCase().indexOf('chrome') > -1)) {
   isAndroidChrome = true;
   var viewportmeta = document.querySelector('meta[name="viewport"]');
   $(document).on('onFocus', '.no-zoom', function(){
     viewportmeta.content = 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1';
   });
   $(document).on('onBlur', '.no-zoom', function(){
     viewportmeta.content = 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1.4';
   });
  }

})

$(document).on('click', 'a.controls', function(){
   //this is where we add our logic
   var index = $(this).attr('href');
   var src = $('ul.row li:nth-child('+ index +') img').attr('src');
   $('.modal-body img').attr('src', src);
   var newPrevIndex = parseInt(index) - 1;
   var newNextIndex = parseInt(newPrevIndex) + 2;

  if($(this).hasClass('previous')){
      $(this).attr('href', newPrevIndex);
      $('a.next').attr('href', newNextIndex);
  }else{
      $(this).attr('href', newNextIndex);
      $('a.previous').attr('href', newPrevIndex);
  }
  var total = $('ul.row li').length + 1;
  //hide next button
  if(total === newNextIndex){
      $('a.next').hide();
  }else{
      $('a.next').show()
  }
  //hide previous button
  if(newPrevIndex === 0){
      $('a.previous').hide();
  }else{
      $('a.previous').show()
  }

   return false;
});

// add navbar active behavior

$(document).on('click', '.smoothScroll', function(e){
  $("#navbar>li.active").removeClass("active");
  $(this).parent().addClass('active');
  return false;
});
