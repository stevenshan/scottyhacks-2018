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
});

