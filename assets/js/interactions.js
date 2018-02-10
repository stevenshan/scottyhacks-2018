var semesters = ["Spring", "Fall"];
var num_years = 4;

var view_bar_setting = 0;
var starting_year = 0; /* start at freshmen year for 1 year view */
var starting_semester = 0; /* start at first semester for semester view */

var semester_names = ["Freshman Fall",
					  "Freshman Spring",
					  "Sophomore Fall",
					  "Sophomore Spring",
					  "Junior Fall",
					  "Junior Spring",
					  "Senior Fall",
					  "Senior Spring",
					  "Extra Fall",
					  "Extra Spring"];

var year_names = ["Freshman",
				  "Sophomore",
				  "Junior",
				  "Senior",
				  "Extra"];

var course_files = ["classes/fall-2017.json", "classes/spring-2018.json"];
var major_files = ["major.json"];
var minor_files = ["minors.json"];

/* bucket sorted dictionary based on department number */
var courses_dict = {};

var course_json = [];
var major_json = [];
var minor_json = [];

/* update all select inputs with correct semesters */
function update_semesters()
{
	$(".sel_semesters").html("");
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
			break;
		}
	}
}

function build()
{
	/* change number of years/semesters */
	num_years = $("#preferences_container input[name='num_years_button']:checked").val();
	$(".chng_max_years").html(num_years);

	/* update drop down lists of semesters */
	semesters = semester_names.slice(0, num_years * 2);
	update_semesters();

	/* reset starting points for view */
	starting_year = 0;
	starting_semester = 0;

	update_graph();
}

function setup_graph()
{
	/* detect view setting changes */
	$("#view_bar input[name='view_button']").change(update_graph);

	build();
}

function add_class()
{
	var class_id = $("#add_class_text").val(),
		class_year = $("#add_class_select").val(),
		class_num = [0, 0];

	/* format course as XX-YYY */
	if (class_id.length == 5)
	{
		class_num[0] = class_id.slice(0, 2);
		class_num[1] = class_id.slice(2);
	}
	else
	{
		class_num = class_id.split("-");
	}

	var query = class_num[0] + "-" + class_num[1];
	if (class_num.length != 2 || 
		!(class_num[0] in courses_dict) || 
		!(query in courses_dict[class_num[0]]))
	{
		alert("Invalid course number");
		return;
	}
	else if (query in classes)
	{
		alert("Class already added");
		return;
	}

	var course_details = courses_dict[class_num[0]][query],
		text_content = "<div class=\"class\"><div class=\"class_details clearfix\"><span class=\"class_id\">" + query + "</span><span>" + course_details["units"] + " units</span><span>C</span></div><div class=\"class_overview\"><span>" + course_details["name"] + "</span></div></div>",
		new_elem = $(text_content);

	$("#semester" + class_year + " > div").append(new_elem);

	classes[query] = new_elem;

	redraw_class_boxes($("#semester" + class_year));

}
