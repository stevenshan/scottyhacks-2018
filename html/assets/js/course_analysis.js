function is_prereq(id, obj)
/* check if id is a prereq to obj course */
{
	prereq = flatten(obj["prereqs_obj"]["reqs_list"]);
	
	/* check if id is in prereqs */
	for (i = 0; i < prereq.length; i++)
	{
		if (id == prereq[i]) return true;
	}	
	return false;
}

function flatten(arr) {
	if (arr == null) return [];
	return arr.reduce(function (flat, toFlatten) {
		return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
	}, []);
}

function draw_prereqs_helper(lower_elem, year1, higher_elem, year2)
{
	if (year1 >= year2)
	{
		console.log("invalid");
	}
	else
	{
		/* valid sequence of prereqs so draw line */
		connect_courses(lower_elem, higher_elem);
	}
}

function draw_prereqs(query, course_details, new_elem, class_year)
{
	for (course in classes)
	{
		var course_id = classes[course][3];
		if (is_prereq(course_id, course_details))
		/* if the one of the class's prereqs was already added */
		{
			draw_prereqs_helper(classes[course][1], classes[course][0],
					    new_elem, class_year);
		}

		var details = classes[course][2];
		if (is_prereq(query, details))
		/* if the added class was a prereq to a class that was added */
		{
			draw_prereqs_helper(new_elem, class_year,
					    classes[course][1], classes[course][0]);
		}
	}
}
