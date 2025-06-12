function setDisplay(pagename){
	const pages = document.getElementById("page").children;
	for (let i=0;i<pages.length;i++){
		pages[i].style.display = "none";
	}
	let page = document.getElementById(pagename);
	if (page == null){
		page = document.getElementById("home");
	}
	page.style.display = "block";
	//updateAddress(pagename);
}

//function updateAddress(pagename){
//	window.history.pushState({}, "", "/" + pagename.toLowerCase());
//}

setDisplay("home");