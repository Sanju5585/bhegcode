function handler(ev) {
    var target = $(ev.target);
    var elId = target.attr('class');
    if( target.is(".dropdown") ) {
       alert('The mouse was over'+ elId );
    }
}
$(document).ready(function(e){
	   $(".dropdown").mouseleave(handler);
        $('.dropdown').on("mouseenter", function() {
			$('.overlay').show();
			 
		
		}).on("mouseleave", function() {
        $('.overlay').hide();
		
    });
	});