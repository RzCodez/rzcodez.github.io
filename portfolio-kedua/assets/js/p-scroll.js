$(function(){
    $('.text-lmao').each(function() {
      var off = $(this).offset().top
      $(this).data('orig-offset', off);
    });
    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop() - .1;
  
       $('.text-lmao').each(function(){
        var off = $(this).data('orig-offset');
        
         
        if (scrollTop >= off) {
          var translate =  (scrollTop - off) / $(window).height() * 300;
          console.log(translate);
          $(this).css({transform: 'translateY(' + translate +'%)'});
        }
        if (scrollTop <= off) {
            var translate =  (scrollTop - off) / $(window).height() * 0;
            console.log(translate);
            $(this).css({transform: 'translateY('+ translate +'%)'});
          }
       });
    });
  });