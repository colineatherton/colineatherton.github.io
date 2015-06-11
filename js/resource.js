$(document).ready(function() {
  var open = 'none';
  $('#caseStudies').on('click', caseOpen);
  $('#research').on('click', researchOpen);
  $('.menuOther').on('click', closeSub);
});
function caseOpen() {
  if (open == 'case') {
    $('#caseStudySub').css({"display":"none"});
    open = 'none'
  } else {
    $('#caseStudySub').css({"display":"block"});
    $('#researchSub').css({"display":"none"});
    open = 'case'
  }
}
function researchOpen() {
  if (open == 'randd') {
    $('#researchSub').css({"display":"none"});
    open = 'none'
  } else {
    $('#researchSub').css({"display":"block"});
    $('#caseStudySub').css({"display":"none"});
    open = 'randd'
  }
}
function closeSub() {
  $('#researchSub').css({"display":"none"});
  $('#caseStudySub').css({"display":"none"});
  open = 'none'
}