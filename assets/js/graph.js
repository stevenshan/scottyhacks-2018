var project = null;

window.onload = function() {
	/* initialize canvas */
	var canvas = document.getElementById("course_canvas");
	paper.setup(canvas);

	connect_courses($("#class1"), $("#class2"));
	connect_courses($("#class1"), $("#class2"));
	connectTest();
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

function makeRectangle(topLeft, size, cornerSize, colour){
    var rectangle = new Rectangle(topLeft, size);
    var cornerSize = cornerSize;
    var path = new Path.RoundRectangle(rectangle, cornerSize);
    path.fillColor = colour;
    return path;
}

function connectTest() {
	var xy1 = new Point(50,50); //Position of 1st rectangle.
    var size = new Size(100, 80); //Size
    var c = new Size(8,8); //Corner radius
    var col = "#167ee5"; //Color
    
    var r1 = makeRectangle(xy1, size, c, col); //Make first rectangle
    
    var xy2 = new Point(467,310); //Position of second rectangle
    var size2 = new Size(115, 70); //Size of second rectangle
    
    var r2 = makeRectangle(xy2, size2, c, col); //Make secont rectangle
    
    var r1cent = r1.bounds.center; //Get the center points, they will be used as endpoints for the curve.
    
    var r2cent = r2.bounds.center;
    
    var rc = new Rectangle(r1cent, r2cent);
    
    var c1 = new Path.Circle(rc.topCenter, 3);
    var c2 = new Path.Circle(rc.bottomCenter, 3);
    c1.fillColor = c2.fillColor = 'red';

    // the handles are relative to the path's point
    // not absolute.
    h1 = rc.topCenter - r1cent;
    h2 = rc.bottomCenter - r2cent;
 
    var r1seg = new Segment(r1cent, null, h1);
    var r2seg = new Segment(r2cent, null, h2);
    
    var connector = new Path(r1seg, r2seg); //Ok so I made this path... Now what? How do access and edit the handlers at endpoints like in the image?
    
    connector.strokeColor = 'black'; //Give it some colour so we can see it.


}


