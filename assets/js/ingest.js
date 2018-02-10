
var request1 = new XMLHttpRequest();
var request2 = new XMLHttpRequest();
request1.open("GET", "../data/classes/fall-2017.json", false);
request2.open("GET", "../data/classes/spring-2018.json", false);
request1.send(null);
request2.send(null);

request1.onreadystatechange = function() {
	if (request1.readyState === 4 && request1.status === 200 ) {
		var fall = JSON.parse(request1.responseText);
		console.log(fall);
	}
}
request2.onreadystatechange = function() {
	if (request2.readyState === 4 && request2.status === 200 ) {
		var spring = JSON.parse(request2.responseText);
		console.log(spring);
	}
}

var classes = [];

/*for (var i = 0, i < fall[courses]length; i++) {
	classes.push(fall.courses[i]);
}
*/
