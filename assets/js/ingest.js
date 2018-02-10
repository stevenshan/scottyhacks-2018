
function load() {
	var request1 = new XMLHttpRequest();
	var request2 = new XMLHttpRequest();
	request1.open("GET", "scottyhacks-2018/data/classes/fall-2017.json", false);
	request2.open("GET", "scottyhacks-2018/data/classes/spring-2018.json", false);
	request1.send(null);
	request2.send(null);
	request1.onreadystatechange = function() {
  		if (request1.readyState === 4 && request1.status === 200 ) {
    		var fall_classes = JSON.parse(request1.responseText);
    		console.log(fall_classes);
  		}
	}
	request2.onreadystatechange = function() {
  		if (request2.readyState === 4 && request2.status === 200 ) {
    		var spr_classes = JSON.parse(request2.responseText);
    		console.log(spr_classes);
  		}
	}		
}

