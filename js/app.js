$(document).ready(function() {

  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken(); 
    $('.ryu-ready').hide();
    $('.stickMan').show();
	$('.ryu-throwing').show();
	$('.hadouken').finish().show()
  .animate(
    {'left': '1000px'},
    500,
    function() {
      $(this).hide();
      $(this).css('left', '290px');
    }
  );
  })
  .mouseup(function() {
	  $('.ryu-throwing').hide();
	  $('.stickMan').hide();
	  $('.ryu-ready').show();
	});
	
	function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

 /*$(document).keydown(function(e) {
    if (e.keyCode == 88) {
      $('.ryu-action').hide();
      $('.ryu-cool').show();
    }
  })*/

$(document).keydown(function( event ) {
  if ( event.which == 88 ) {
	$('.ryu-ready').hide();
      $('.ryu-cool').show();
  }
})
.keyup(function(e) {
    if (e.keyCode == 88) {
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    }
  });
});