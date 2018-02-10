function is_prereq(id, obj)
/* check if id is a prereq to obj course */
{
	prereq = obj["prereqs_obj"]["reqs_list"];

	/* check if id is in prereq */
	while (prereq.length != 0)
	{
		var top = prereq.shift();
		if (typeof top !== "string")
		{
			for (x in top)
			{
				prereq.push(x);
			}
		}
		else if (top == id)
		{
			return true;
		}
	}
	return false;
}

function draw_prereqs(query, course_details)
{
	for (course in classes)
	{
		var course_id = course[3];
		if (is_prereq(course_id, course_details))
		{
			console.log(course_id, " ==> ", query);
		}

		var details = course[2];
		if (is_prereq(query, details))
		{
			console.log(query, " ==> ", course_id);
		}
	}
}