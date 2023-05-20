$(document).ready(function(){
  $('.read-more').hide()
  $('.less').hide()
  if(screen.width<600){
    $('.read-more').toggle()
    $('.read-more').click(function(){
      $('.about-body').css('height', 'auto')
      $('.read-more').hide()
      $('.less').toggle()
    })
    $('.less').click(function(){
      $('.about-body').css('height', '300px')
    })
  }

  if(screen.width<1000){
    $('.navbar-list').hide()
    $('.cross').hide()
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
