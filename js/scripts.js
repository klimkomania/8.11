var list = document.getElementById("list"),
    add = document.getElementById("addElem"),
    countnumber = document.getElementsByTagName("li");
    	console.log(countnumber);

add.addEventListener("click", function() {
	list.innerHTML += "<li>item" + countnumber.length + "</li>";
});