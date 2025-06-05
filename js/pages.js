function setDisplay(pagename){
	const pages = document.getElementById("page").children;
	for (let i=0;i<pages.length;i++){
		pages[i].style.display = "none";
	}
	document.getElementById(pagename).style.display = "block";
	updateAddress(pagename);
}

function updateAddress(pagename){
	window.history.pushState({}, "", "/" + pagename.toLowerCase());
}

setDisplay("home");