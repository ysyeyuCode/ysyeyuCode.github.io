var h=localStorage.history;
console.log(h);
console.log(this);
console.log("Xchuang");
console.log("html 5");
console.log("CSS 3");
console.log("the source website is: 'https://xchuangc.github.io/start/'");

window.alert(this)

function keydown() {
	console.log(event.keyCode)
	if(event.keyCode == 13){
		go(document.getElementById('c').value);
	}
}

if (this==window);{
	console.log("window")
}


function go(concent) {
	localStorage.history=h + ", " + concent;
	var h=localStorage.history;
	console.log(h);

	console.log(concent);
	if (concent.includes("https://")){
		top.location=concent;
		console.log("https://")

	} else if (concent.includes("http://")) {
		top.location=concent;
		console.log("http://")

	} else if (concent.includes(".com")) {
		top.location="https://"+concent;
		console.log(".com")

	} else if (concent.includes(".io")) {
		top.location="https://"+concent;
		console.log(".io")

	} else if (concent.includes(".cn")) {
		top.location="https://"+concent;
		console.log(".cn")

	} else if (concent.includes(".gov")) {
		top.location="https://"+concent;
		console.log(".gov")

	} else if (concent.includes(".hk")) {
		top.location="https://"+concent;
		console.log(".hk")

	} else if (concent.includes("www.")) {
		top.location="https://"+concent;
		console.log("www.")
	
	} else if (concent.includes(".org")) {
		top.location="https://"+concent;
		console.log(".org")

	} else if (concent.includes(".net")) {
		top.location="https://"+concent;
		console.log(".net")

	} else if (concent.includes(".cyou")) {
		top.location="https://"+concent;
		console.log(".cyou")

	} else if (concent.includes(".xyz")) {
		top.location="https://"+concent;
		console.log(".xyz")

	} else if (concent.includes(".top")) {
		top.location="https://"+concent;
		console.log(".top")

	} else if (concent.includes(".tech")) {
		top.location="https://"+concent;
		console.log(".tech")

	} else{
		top.location="https://www.google.com/search?q="+ concent;
	}
}

function hist() {
	document.getElementById('hist').value=h.replace("undefined, ","")
	document.getElementById("histarea").style.visibility = "visible";
}