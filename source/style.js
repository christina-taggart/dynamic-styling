// Shorthand for document ready

$( document ).ready(function() {
  $('#style_editor' ).submit( function(event) {
    event.preventDefault();
    var inputs = $(this).serializeArray()
    var parsed = {}
    $.each(inputs, function(){parsed[this.name] = this.value})
    console.log(jQuery)
    $(parsed.selector).css(parsed.property, parsed.value);
    event.preventDefault();
    });

});


