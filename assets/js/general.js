/* code to be executed on load */
$(function(){
	var container_mapping = {"display": "display_window",
							 "settings": "settings_window"};

	/* set default container */
	$("#header_option_1").prop("checked", true); // select first container

	/* event for header menu change */
	$("#header input[name='header_button']").change(function(){
		if (!(this.value in container_mapping))
		{
			console.log("invalid container reference");
			return;
		}
		var new_window_id = container_mapping[this.value];

		/* make selected container visible */
		$(".container#" + new_window_id).css("display", "block");

		/* make all containers except selected one display:none */
		$(".container").not("#" + new_window_id).css("display", "none");
	});

	/* trigger change event listener to update container */
	$("#header input[name='header_button']:checked").change();

});

/* make sure class boxes fit into semester row (aka theres not
 * so many classes that it ends up overflowing into another row */
function redraw_class_boxes(semester)
{
	/* default styling properties (all in pixels) */
	var def_margin = 15, /* default margin to each side of class block */
		min_margin = 5; /* minimum margin for property above */

	var classes = semester.find(".class");
	var num_classes = classes.length;

	/* each class's width should be the same */
	var class_width = $(classes[0]).outerWidth(true);

	/* get available width */
	var total_width = $(semester.find("div").get(0)).width();

	if (num_classes * class_width < total_width)
	/* if classes boxes don't need to be resized */
	{
		return;
	}

	/* otherwise classes blocks do need to be resized */

	/* properties to be optimized */
	var margin = def_margin;
	var width = $(classes[0]).width();

	/* try to minimize margins to make space before shrinking boxes */
	/* TODO: make this resizing thing actually good */
	margin = min_margin;
	$(classes).css("margin", "0px " + margin + "px");
	class_width = $(classes[0]).outerWidth(true);

	if (class_width * num_classes <= total_width)
	{
		return;
	}

	var width_delta = parseInt(
							Math.ceil(
								parseFloat(class_width * num_classes - total_width) /
									num_classes)
							);
	width -= width_delta;

	/* update html DOM */
	$(classes).width(width)
}