// Shorthand for document ready
$(function(){
  $('#style_editor').submit(
    function(event){
      var selector = this.selector.value;
      var property = this.property.value;
      var value = this.value.value;
      $(selector).css(property, value);
      event.preventDefault();
    }
    )
});