var semesters = ["Spring", "Fall"];

/* update all select inputs with correct semesters */
function update_semesters()
{
	$(".sel_semesters").html();
	for (key in semesters)
	{
		$(".sel_semesters")
			.append("<option value=\"" + key + "\">" + 
					semesters[key] + "</option>")
	}
}

function show_taskbar_menu(id)
{
	switch (id)
	{
		case "add":
		{
			if ($("#add_class_menu").data("visible"))
			{
				$("#add_class_menu")
					.data("visible", false)
					.css("display", "none");
			}
			else
			{
				$("#add_class_menu")
					.data("visible", true)
					.css("display", "block");
			}
		}
	}
}

function build()
{
	/* change number of years/semesters */
	var num_years = $("#preferences_container input[name='num_years_button']:checked").val();
	$(".chng_max_years").html(num_years);

}

$(function(){
	update_semesters();
})