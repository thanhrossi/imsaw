var imsaw = function(){
  $(".button-collapse").sideNav();
  // align center- middle for search form
  $('.modal-trigger').leanModal();
  $('.datepicker').pickadate({
    
  });
  // Select time
  $('.time_period').change(function(event) {
    alert("change");
  });
}

$(document).ready( function() {
  // gather params from querystring, server injection, etc
  imsaw();
});