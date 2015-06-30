$(document).ready(function() {
  //listen for a click on a profile button
  $('#yoursSection').on('click', changeYoursClass);
  $('#SPSection').on('click', changeSPClass);
});

  function changeYoursClass() {
    //do this if the 'Your Energy' button is clicked
    //ensure the other button is in the correct inactive state
      //by first adding that state class and removing the active state class
    $('#SPSection').addClass('profile-service-provider-solid');
    $('#SPSection').removeClass('profile-service-provider-selected');
    //remove the selected buttons inactive state class
      //add the selected buttons active state class
    $('#yoursSection').removeClass('profile-owner-solid');
      $(this).addClass('profile-owner-selected');
  }

  function changeSPClass() {
    //do this is the enterprise button is clicked
    //ensure the other two buttons are in the correct inactive state
      //by first adding that state class and removing the active state class
    $('#yoursSection').addClass('profile-owner-solid');
    $('#yoursSection').removeClass('profile-owner-selected');
    //remove the selected buttons inactive state class
      //add the selected buttons active state class
    $('#SPSection').removeClass('profile-service-provider-solid');
      $(this).addClass('profile-service-provider-selected');
  }