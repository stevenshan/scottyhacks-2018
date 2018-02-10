window.onload = function() {
	// Get a reference to the canvas object
	

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

	var pos1 = get_elem_center(elem1), /* coordinates of elem1 */
		pos2 = get_elem_center(elem2); /* coordinates of elem1 */

	var canvas = document.getElementById('course_canvas');
	// Create an empty project and a view for the canvas:
	paper.setup(canvas);
	// Create a Paper.js Path to draw a line into it:
	var path = new paper.Path();
	// Give the stroke a color
	path.strokeColor = 'black';
	var start = new paper.Point(0, 0);
	// Move to start and draw a line from there
	path.moveTo(start);
	// Note that the plus operator on Point objects does not work
	// in JavaScript. Instead, we need to call the add() function:
	path.lineTo(start.add([pos1.x, pos1.y]));
	// Draw the view now:
	paper.view.draw();



	/* add edge to list of edges */
	edges[hash] = true;
}