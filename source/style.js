// Shorthand for document ready
$(function(){
  $("#style_editor").on("submit", function(event) {
    event.preventDefault();
    var form = document.querySelector('#style_editor');
    var userSelector = form["selector"].value;
    var userProperty = form["property"].value;
    var userValue = form["value"].value;
    $(userSelector).css(userProperty, userValue);
  });
});