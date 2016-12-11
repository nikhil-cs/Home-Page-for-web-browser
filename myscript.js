function searchYoutube(){
	var str = document.getElementById("youtubeTxt").value;
	var res = str.split(" ");
	 //document.getElementById("demo").innerHTML = res;
	 var link = "https://www.youtube.com/results?search_query=";
	 for (var i = 0; i < res.length; i++) {
	 	link = link + res[i] + "+";
	 }
	document.getElementById("youtubeTxt").value="";
	 	window.open(link);
}
function searchIdope(){
	var str = document.getElementById("idopeTxt").value;
	var res = str.split(" ");
	 //document.getElementById("demo").innerHTML = res;
	 var link = "https://idope.se/torrent-list/";
	 for (var i = 0; i < res.length; i++) {
	 	link = link + res[i] + "%20";
	 }
	document.getElementById("idopeTxt").value="";
	 	window.open(link);
}
