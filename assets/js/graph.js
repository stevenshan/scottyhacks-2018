var project = null;
var node_counter = 0;

function init_canvas()
{
	$("#course_canvas").removeAttr().html();
	var canvas = document.getElementById("course_canvas");
	paper.setup(canvas);
}

var edges = {};

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
		elem.data("id", node_counter);
		node_counter++;
		return node_counter - 1;
	}
	return elem.data("id");
}

function connect_courses(elem1, elem2)
{
	if (elem1 == null || elem2 == null)
	{
		console.log("cannot connect null elements");
		return;
	}
	var id1 = get_elem_id(elem1),
		id2 = get_elem_id(elem2);

	/* make sure edge is not a duplicate */
	var hash = Math.pow(2, id1) * Math.pow(3, id2);
	if (hash in edges)
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
	var view_type = $("#view_bar input[name='view_button']:checked").val();
	var obj = $("#semesters");

	switch (view_type)
	{
		case "view_k_year":
		{
			for (i = 0; i < num_years * 2; i++)
			{
				var temp = (i + 1) + ": ";
				if (i < semester_names.length)
				{
					temp += semester_names[i];
				}
				obj.append("<div class=\"semester\"><div><h1>" +
						   temp + 
						   "</h1></div></div>");
			}
			break;
		}
		case "view_1_year":
		case "view_semester":
	}
}