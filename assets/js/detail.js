var course_files = ["classes/fall-2017.json", "classes/spring-2018.json"];

function hover() {
	$('.class').hover(function (e) {    
    	var target = '#' + ($(this).attr('data-popbox'));
    	$(target).show();
    	moveLeft = $(this).outerWidth();
    	moveDown = ($(target).outerHeight() / 2);
	}, 

	function () {
    	var target = '#' + ($(this).attr('data-popbox'));
    	if (!($(".class").hasClass("show"))) {
        	$(target).hide(); //dont hide popup if it is clicked
    	}	
	});


	$('.class').click(function (e) {
    	var target = '#' + ($(this).attr('data-popbox'));
    if (!($(this).hasClass("show"))) {
        $(target).show();
    }
    $(this).toggleClass("show");
});