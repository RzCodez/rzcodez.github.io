$(function(){
    $('.dotted-pattern').each(function() {
      var off = $(this).offset().top
      $(this).data('orig-offset', off);
    });
    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop();
  
       $('.dotted-pattern').each(function(){
        var off = $(this).data('orig-offset');
        
         
        if (scrollTop >= off) {
          var translate =  (scrollTop - off) / $(window).height() * 30;
          console.log(translate);
          $(this).css({transform: 'translateX(' + translate +'%)'});
        }
        if (scrollTop <= off) {
            var translate =  (scrollTop - off) / $(window).height() * 30;
            console.log(translate);
            $(this).css({transform: 'translateX(' + translate +'%)'});
          }
       });
    });
    $('.dotted-pattern2').each(function() {
        var off = $(this).offset().top
        $(this).data('orig-offset', off);
      });
      $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
    
         $('.dotted-pattern2').each(function(){
          var off = $(this).data('orig-offset');
          
           
          if (scrollTop >= off) {
            var translate =  (scrollTop - off) / $(window).height() * 30;
            console.log(translate);
            $(this).css({transform: 'translateY(' + translate +'%)'});
          }
          if (scrollTop <= off) {
              var translate =  (scrollTop - off) / $(window).height() * 30;
              console.log(translate);
              $(this).css({transform: 'translateY(' + translate +'%)'});
            }
         });
      });
      $('.line-svg').each(function() {
        var off = $(this).offset().top
        $(this).data('orig-offset', off);
      });
      $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
    
         $('.line-svg').each(function(){
          var off = $(this).data('orig-offset');
          
           
          if (scrollTop >= off) {
            var translate =  (scrollTop - off) / $(window).height() * 30;
            console.log(translate);
            $(this).css({transform: 'translateY(' + translate +'%)'});
          }
          if (scrollTop <= off) {
              var translate =  (scrollTop - off) / $(window).height() * 30;
              console.log(translate);
              $(this).css({transform: 'translateY(' + translate +'%)'});
            }
         });
      });
      $('.line-svg2').each(function() {
        var off = $(this).offset().top
        $(this).data('orig-offset', off);
      });
      $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
    
         $('.line-svg2').each(function(){
          var off = $(this).data('orig-offset');
          
           
          if (scrollTop >= off) {
            var translate =  (scrollTop - off) / $(window).height() * 30;
            console.log(translate);
            $(this).css({transform: 'translateY(' + translate +'%)'});
          }
          if (scrollTop <= off) {
              var translate =  (scrollTop - off) / $(window).height() * 30;
              console.log(translate);
              $(this).css({transform: 'translateY(' + translate +'%)'});
            }
         });
      });
  });