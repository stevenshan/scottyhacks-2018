function get_json(filename)
{
	const request = async () => {
	    const response = await fetch("data/" + filename);
	    const json = await response.json();
	    return json;
	}

	request();
}

function read_courses(filename)
{
	var j = get_json("classes/fall-2017.json");
	console.log(j);
}