     $(document).ready(function(){
        var profile = window.location.hash;
        if (profile == '#owner-tenant') {
        	$('#sp').removeClass('active');
        	$('#yours').addClass('active');
        	$('#yoursSection').addClass('circletagYoursSelect');
        	$('#SPSection').removeClass('circletagSomeoneElseSelect');
            $('#yoursSection').addClass('circletagSomeoneElseSolid');
        }; if (profile == '#service-provider') {
        	$('#yours').removeClass('active');
        	$('#sp').addClass('active');
        	$('#SPSection').addClass('circletagSomeoneElseSelect');
        	$('#yoursSection').removeClass('circletagYoursSelect');
        	$('#yoursSection').addClass('circletagYoursSolid');
        };
      });