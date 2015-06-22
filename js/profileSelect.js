$(document).ready(function() {
  //listen for a click on a profile button
  $('#residentialSection').on('click', changeResiClass);
  $('#enterpriseSection').on('click', changeBusiClass);
  $('#serviceProvidersSection').on('click', changeSPClass);
});

  function changeResiClass() {
    //do this is the residential button is clicked
    //ensure the other two buttons are in the correct inactive state
      //by first adding that state class and removing the active state class
    $('#enterpriseSection').addClass('circletagBusi');
    $('#enterpriseSection').removeClass('circletagBusiSelected');
    $('#serviceProvidersSection').addClass('circletagSP');
    $('#serviceProvidersSection').removeClass('circletagSPSelected');
    //remove the selected buttons inactive state class
      //add the selected buttons active state class
    $('#residentialSection').removeClass('circletagResi');
      $(this).addClass('circletagResiSelected');
  }

  function changeBusiClass() {
    //do this is the enterprise button is clicked
    //ensure the other two buttons are in the correct inactive state
      //by first adding that state class and removing the active state class
    $('#residentialSection').addClass('circletagResi');
    $('#residentialSection').removeClass('circletagResiSelected');
    $('#serviceProvidersSection').addClass('circletagSP');
    $('#serviceProvidersSection').removeClass('circletagSPSelected');
    //remove the selected buttons inactive state class
      //add the selected buttons active state class
    $('#enterpriseSection').removeClass('circletagBusi');
      $(this).addClass('circletagBusiSelected');
  }

  function changeSPClass() {
    //do this is the service providers button is clicked
    //ensure the other two buttons are in the correct inactive state
      //by first adding that state class and removing the active state class
    $('#enterpriseSection').addClass('circletagBusi');
    $('#enterpriseSection').removeClass('circletagBusiSelected');
    $('#residentialSection').addClass('circletagResi');
    $('#residentialSection').removeClass('circletagResiSelected');
    //remove the selected buttons inactive state class
      //add the selected buttons active state class
    $('#serviceProvidersSection').removeClass('circletagSP');
      $(this).addClass('circletagSPSelected');
  }