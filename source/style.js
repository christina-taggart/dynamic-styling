// Shorthand for document ready
// $(function(){
//   // your code goes here.
//   on click that style thing!! do some shit !!!!!
// });


$(function(){
    var adjustCSS = function () {
    var selector = $(".selector").val();
    var property = $(".property").val();
    var value = $(".value").val();
    $(selector).css(property,value);
  }
$("#style_editor > input[type=submit]").on( "click",  function(event) {
  event.preventDefault();
  adjustCSS();
})

})