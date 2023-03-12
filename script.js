
$(document).ready(function(){
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
  });

function emailSubmit() {
    senderName = document.getElementById('name')
    alert('Thank you ' + senderName + ' for reaching out.')
}

