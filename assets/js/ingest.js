function get_json(filename, callback, callback_data, save_location)
{
	const request = async () => {
	    flag = false;
            var json;
	    try
	    {
		const response = await fetch("data/" + filename);
	        json = await response.json();
	    }
	    catch (err)
	    {
		flag = true;
	        console.log("could not read " + filename);
	    }

	    if (!flag)
	    {
		save_location.push(json);
	    }
	    callback(callback_data);
	}

	request();
}

function load_json_callback(callback)
{
	json_load_count += 1;
	if (json_load_count == json_load_total)
	{
		callback();
	}	
}

var json_load_count = 0,
    json_load_total = 0;
function load_json_files(callback)
{
	json_load_count = 0;
	json_load_total = 0;

	// load all json files

	// course files
	for (i = 0; i < course_files.length; i++)
	{
		json_load_total += 1;
		get_json(course_files[i], load_json_callback, callback, course_json);	
	}

	// major files
	for (i = 0; i < major_files.length; i++)
	{
		json_load_total += 1;
		get_json(major_files[i], load_json_callback, callback, major_json);	
	}

	// minor files
	for (i = 0; i < minor_files.length; i++)
	{
		json_load_total += 1;
		get_json(minor_files[i], load_json_callback, callback, minor_json);	
	}
}
