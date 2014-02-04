// Shorthand for document ready
$(function(){
  // your code goes here.
  console.log("ready")
  $('#style_editor').submit(function(event){
  		
  		var selector = $("input[name=selector]").val();
  		console.log(selector)
  		var property =  $("input[name=property]").val();
  		var value = $("input[name=value]").val();
  		$(selector).css(property, value);
  		event.preventDefault();
  	})
});



//<input name="selector" placeholder="css selector" />
        // <input name="property" placeholder="property" />
        // <input name="value" placeholder="value" />
        // <input type="submit" value="Style it!" />