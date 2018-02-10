function get_json(filename)
{
var jqxhr = $.get("data/" + filename, function() {
				alert( "success" );
			})
			.done(function() {
			alert( "second success" );
			})
			.fail(function() {
			alert( "error" );
			})
			.always(function() {
			alert( "finished" );
			});
}