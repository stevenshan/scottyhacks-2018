var edges = {};
var id_to_dom = {};
var classes = {};

function init_canvas()
{
	edges = {};	
	$("#course_canvas").removeAttr().html();
	var canvas = document.getElementById("course_canvas");
	paper.setup(canvas);
}

function redraw_edges()
{
	paper.project.clear();
	var bk_edges = edges;
	edges = {}
	
	for (edge in bk_edges)
	{
		draw_edge(edge);
	}
}

/* return coordinates of center of element */
function get_elem_center(elem)
{
	var x = elem.position().left, /* x coord top left corner*/
		y = elem.position().top, /* y coord top left corner */
		w = elem.outerWidth(true), /* width */
		h = elem.outerHeight(true); /* height*/
	return {x: x + w / 2, y: y + h / 2};
}

function get_elem_id(elem)
{
	if (elem.data("id") === undefined)
	{
		var temp = parseInt(elem.attr("id").replace("c", "").replace("-", ""));
		id_to_dom[temp] = elem.attr("id");
		elem.data("id", temp);
		return temp;
	}
	return elem.data("id");
}

function draw_edge(hash)
{
	var x = 0, y = 0;
	x = hash % 100000;
	y = parseInt(hash / 100000);
	connect_courses($("#"+id_to_dom[x]), $("#"+id_to_dom[y]));	
}

function connect_courses(elem1, elem2)
{
	if (elem1 == null || elem2 == null || 
	    elem1 == undefined || elem2 == undefined ||
	    !elem1.length || !elem2.length)
	{
		console.log("cannot connect null elements");
		return;
	}
	var id1 = get_elem_id(elem1),
		id2 = get_elem_id(elem2);

	/* make sure edge is not a duplicate */
	var hash = id1 * 100000 + id2;
	if (hash in edges || ((id2 * 100000 + id1) in edges))
	{
		console.log("duplicate edge");
		return;
	}
	else if (elem1 == elem2)
	{
		console.log("self loop");
		return;
	}

	var pos1 = get_elem_center(elem1), /* coordinates of elem1 */
		pos2 = get_elem_center(elem2); /* coordinates of elem1 */

	var path = new paper.Path();
	path.strokeColor = "black";
	path.strokeWidth = "5";
	var start = new paper.Point(pos1.x, pos1.y);
	path.moveTo(start);
	path.lineTo(start.add([pos2.x - pos1.x, 
						   pos2.y - pos1.y]));

	/* add edge to list of edges */
	edges[hash] = path;
}

function update_graph()
{
	id_to_dom = {};

	/* clear semesters */
	$("#semesters .semester").remove();

	var view_type = $("#view_bar input[name='view_button']:checked").val();
	var obj = $("#semesters");

	switch (view_type)
	{
		case "view_k_year":
		{
			$("#view_bar_controls").css("display", "none");
			for (i = 0; i < num_years * 2; i++)
			{
				var temp = (i + 1) + ": ";
				if (i < semester_names.length)
				{
					temp += semester_names[i];
				}
				obj.append("<div class=\"semester\" id=\"semester" + i + "\"><div><h1>" +
						   temp + 
						   "</h1></div></div>");
			}
			break;
		}
		case "view_1_year":
		{
			view_bar_setting = 0
			$("#view_bar_controls").css("display", "");
			if (starting_year % 2 == 0)
			{
				$("#view_bar_controls #view_bar_text")
					.text(year_names[parseInt(starting_year / 2)]);
			}
			else
			{
				$("#view_bar_controls #view_bar_text")
					.text(year_names[parseInt(starting_year / 2)] + "~" +
						  year_names[parseInt(starting_year/ 2) + 1]);
			}
			for (i = starting_year; i < starting_year + 2; i++)
			{
				var temp = (i + 1) + ": ";
				if (i < semester_names.length)
				{
					temp += semester_names[i];
				}
				obj.append("<div class=\"semester\" id=\"semester" + i + "\"><div><h1>" +
						   temp + 
						   "</h1></div></div>");
			}
			break
		}
		case "view_semester":
		{
			view_bar_setting = 1;
			$("#view_bar_controls").css("display", "");
			$("#view_bar_controls #view_bar_text").text(starting_semester + 1);
			var temp = (starting_semester + 1) + ": ";
			if (starting_semester < semester_names.length)
			{
				temp += semester_names[starting_semester];
			}
			obj.append("<div class=\"semester\" id=\"semester" + starting_semester + "\"><div><h1>" +
					   temp + 
					   "</h1></div></div>");
			break;
		}
	}

	/* re-add classes that were added */
	var new_classes = classes;
	classes = {};
	for (course in new_classes)
	{
		insert_class(course, new_classes[course][0]);
	}

	/* reset canvas */
	init_canvas();

	redraw_edges();
}

function view_bar_prev()
{
	if (view_bar_setting == 0)
	/* 1 year view */
	{
		if (starting_year == 0)
		{
			/* already at 0, can't go previous anymore */
			return;
		}
		starting_year -= 1;
		update_graph();
	}
	else if (view_bar_setting == 1)
	/* semester view */
	{
		if (starting_semester == 0)
		{
			/* already at 0, can't go previous anymore */
			return;
		}
		starting_semester -= 1;
		update_graph();
	}
}

function view_bar_next()
{
	if (view_bar_setting == 0)
	/* 1 year view */
	{
		if (starting_year == num_years * 2 - 2)
		{
			/* already at 0, can't go forward anymore */
			return;
		}
		starting_year += 1;
		update_graph();
	}
	else if (view_bar_setting == 1)
	/* semester view */
	{
		if (starting_semester == num_years * 2 - 1)
		{
			/* already at 0, can't go forward anymore */
			return;
		}
		starting_semester += 1;
		update_graph();
	}
}

function insert_class(class_id, class_year)
{
	var class_num = [0, 0];
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
		console.log("invalid course number");
		return;
	}
	else if (query in classes)
	{
		alert("Class already added");
		console.log("class already added");
		return;
	}

	var course_details = courses_dict[class_num[0]][query],
		text_content = "<div class=\"class\" id=\"c" + query + "\" onclick=\"class_click_action(this)\"><div class=\"class_details clearfix\"><span class=\"class_id\">" + query + "</span><span>" + course_details["units"] + " units</span><span></span></div><div class=\"class_overview\"><span>" + course_details["name"] + "</span></div></div>",
		new_elem = $(text_content);

	var location = $("#semester" + class_year + " > div");
	location.append(new_elem);
	if (!location.length || location.length == 0)
	{
		new_elem = null;
	}
	else
	{
		redraw_edges();
		draw_prereqs(query, course_details, new_elem, class_year);
	}

	classes[query] = [class_year, new_elem, courses_dict[class_num[0]][query], query];
	redraw_class_boxes($("#semester" + class_year));
}
