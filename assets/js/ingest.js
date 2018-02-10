function get_json(filename)
{
	const request = async () => {
	    const response = await fetch("data/" + filename);
	    const json = await response.json();
	    console.log(json);
	}

	request();
}