function is_prereq(id, obj)
/* check if id is a prereq to obj course */
{
	prereq = obj["prereqs_obj"]["reqs_list"];
	
	/* check if id is in prereqs */
	return is_prereq_helper(id, prereq);
}

function is_prereq_helper(id, prereqs)
{
	if (typeof prereqs === "string")
	{
		if (id == prereqs) return true;
		else return false;
	}
	flag = false;
	for (i = 0; i < prereqs.length; i++)
	{
		flag |= is_prereq_helper(id, prereqs[i]);	
	}
	return flag;
}

function draw_prereqs(query, course_details)
{
	for (course in classes)
	{
		var course_id = classes[course][3];
		if (is_prereq(course_id, course_details))
		{
			console.log(course_id, " ==> ", query);
		}

		var details = classes[course][2];
		if (is_prereq(query, details))
		{
			console.log(query, " ==> ", course_id);
		}
	}
}
