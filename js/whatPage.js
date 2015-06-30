     $(document).ready(function(){
        var profile = window.location.hash;
        if (profile == '#owner-tenant') {
        	$('#sp').removeClass('active');
        	$('#yours').addClass('active');
        	$('#yoursSection').addClass('profile-owner-selected');
        	$('#SPSection').removeClass('profile-service-provider-selected');
            $('#yoursSection').addClass('profile-service-provider-solid');
        }; if (profile == '#service-provider') {
        	$('#yours').removeClass('active');
        	$('#sp').addClass('active');
        	$('#SPSection').addClass('profile-service-provider-selected');
        	$('#yoursSection').removeClass('profile-owner-selected');
        	$('#yoursSection').addClass('profile-owner-solid');
        };
      });