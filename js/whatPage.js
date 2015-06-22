     $(document).ready(function(){
        var profile = window.location.hash;
        if (profile == '#residential') {
        	$('#enterprise').removeClass('active');
        	$('#residential').addClass('active');
        	$('#residentialSection').addClass('circletagResiSelected');
        	$('#enterpriseSection').removeClass('circletagBusiSelected');
        	$('#enterpriseSection').addClass('circletagBusi');
        }; if (profile == '#serviceProviders') {
        	$('#enterprise').removeClass('active');
        	$('#serviceProviders').addClass('active');
        	$('#serviceProvidersSection').addClass('circletagSPSelected');
        	$('#enterpriseSection').removeClass('circletagBusiSelected');
        	$('#enterpriseSection').addClass('circletagBusi');
        };
      });