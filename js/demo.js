     $(document).ready(function(){
        var demoCTA = window.location.hash;
        if (demoCTA == '#demo') {
        	$('#caseStudy1').removeClass('active');
        	$('#demos').addClass('active');
        };
      });