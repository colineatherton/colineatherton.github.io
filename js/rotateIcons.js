      $(document).ready(function(){
        $('.carousel').carousel();
          interval: 2000
          pause: hover
          wrap: true
      });
      //was $('.carousel'). but was conflicting with other slider     
      $('#my-carousel').on('slid.bs.carousel', function () {
        var carouselData = $(this).data('bs.carousel');
        //var currentIndex = carouselData.getActiveIndex();
        var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
        var total = carouselData.$items.length;
    
        // Now display this wherever you want
        var text = (currentIndex + 1) + " of " + total;
        $('#carousel-index').text(text);
        if (currentIndex == 0) {
          $(".one-platform-icon").addClass("one-platform-icon-selected");
          $(".flexible-reporting-icon, .analytics-icon, .project-tracking-icon").removeClass("flexible-reporting-icon-selected analytics-icon-selected project-tracking-icon-selected");
        } else if (currentIndex == 1) {
          $(".flexible-reporting-icon").addClass("flexible-reporting-icon-selected");
          $(".one-platform-icon").addClass("one-platform-icon");
          $(".one-platform-icon, .analytics-icon, .project-tracking-icon").removeClass("one-platform-icon-selected analytics-icon-selected project-tracking-icon-selected");
        } else if (currentIndex == 2) {
          $(".analytics-icon").addClass("analytics-icon-selected");
          $(".one-platform-icon, .flexible-reporting-icon, .project-tracking-icon").removeClass("one-platform-icon-selected flexible-reporting-icon-selected project-tracking-icon-selected");
        } else if (currentIndex == 3) {
          $(".project-tracking-icon").addClass("project-tracking-icon-selected");
          $(".one-platform-icon, .flexible-reporting-icon, .analytics-icon").removeClass("one-platform-icon-selected flexible-reporting-icon-selected analytics-icon-selected");
        }
      });