$(document).ready(function(){
  if (screen.width < 600){
      $('.navbar-list').hide()
      $('.details').hide()
      $('.cross').hide()
  }
  else{
    $('.view').hide()
    $(".service").hover(function(){
      $(this).find('.view').toggle()
      $(this).find('.details').hide()
      }, 
      function(){
        $(this).find('.view').hide()
        $(this).find('.details').toggle()
    });

    $(".project").hover(function(){
        $(this).find('.view').toggle()
        $(this).find('.details').hide()
        }, 
        function(){
          $(this).find('.view').hide()
          $(this).find('.details').toggle()
      });
  }

  $('.bars').click(function(){
      $('.navbar-list').toggle()
      $('.cross').toggle()
      $('.bars').hide()
  }); 

  $('.cross').click(function(){
    $('.navbar-list').hide()
    $('.cross').hide()
    $('.bars').toggle()
  });

});
function emailSubmit() {
  senderName = document.getElementById('name').value
  alert('Thank you ' + senderName + ' for reaching out.')
}
