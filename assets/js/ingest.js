function get_json(filename)
{
	fetch("data/" + filename, {mode: 'no-cors'})
	.then(function(result) {
		return result.text();
	})
	.then(function(text){
		console.log(text);
	});
}