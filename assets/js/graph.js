var project = null;

window.onload = function() {
	/* initialize canvas */
	var canvas = document.getElementById("course_canvas");
	paper.setup(canvas);

	connect_courses($("#class1"), $("#class2"));
	connect_courses($("#class1"), $("#class2"));
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

function connect_courses(elem1, elem2)
{
	var id1 = elem1.find(".class_id").html(),
		id2 = elem2.find(".class_id").html();

	/* make sure edge is not a duplicate */
	var hash = id1 + ":" + id2;
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
	edges[hash] = true;
}

