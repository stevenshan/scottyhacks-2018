var semesters = ["Spring", "Fall"];
var num_years = 4;

var delete_mode = true;

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

	insert_class(class_id, class_year);

	update_graph();
}

function class_click_action(elem)
{
	if (delete_mode)
	{
		delete classes[$(elem).attr("id").slice(1)];	
		update_graph();
		console.log("test");
	}
}
