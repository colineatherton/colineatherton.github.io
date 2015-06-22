      $(document).ready(function(){
        $('.carousel').carousel();
          interval: 2000
          pause: hover
          wrap: true
      });
      //was $('.carousel'). but was conflicting with other slider     
      $('#myCarousel').on('slid.bs.carousel', function () {
        var carouselData = $(this).data('bs.carousel');
        //var currentIndex = carouselData.getActiveIndex();
        var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
        var total = carouselData.$items.length;
    
        // Now display this wherever you want
        var text = (currentIndex + 1) + " of " + total;
        $('#carousel-index').text(text);
        if (currentIndex == 0) {
          $(".circletag1").addClass("circletag1Select");
          $(".circletag2, .circletag3, .circletag4").removeClass("circletag2Select circletag3Select circletag4Select");
        } else if (currentIndex == 1) {
          $(".circletag2").addClass("circletag2Select");
          $(".circletag1").addClass("circletag1");
          $(".circletag1, .circletag3, .circletag4").removeClass("circletag1Select circletag3Select circletag4Select");
        } else if (currentIndex == 2) {
          $(".circletag3").addClass("circletag3Select");
          $(".circletag1, .circletag2, .circletag4").removeClass("circletag1Select circletag2Select circletag4Select");
        } else if (currentIndex == 3) {
          $(".circletag4").addClass("circletag4Select");
          $(".circletag1, .circletag2, .circletag3").removeClass("circletag1Select circletag2Select circletag3Select");
        }
      });