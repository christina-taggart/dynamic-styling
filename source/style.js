// Shorthand for document ready
$(function() {
var cssPropertyChanger = function(event) {
  event.preventDefault();
  var selector = $("input[name='selector']").val();
  var property = $("input[name='property']").val();
  var value = $("input[name='value']").val();
  $(selector).css(property, value);
};
form = $('#style_editor');
form.on("submit", cssPropertyChanger);
});