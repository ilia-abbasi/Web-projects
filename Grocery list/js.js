function make(){
	
	var list = document.getElementById('list');
	var string = document.getElementById('get');
	var node = document.createElement('li');
	if(string.value == "") return null;
	var span = document.createElement('span');
	var textnode = document.createTextNode(string.value + "     ");
	
	span.appendChild(textnode);
	node.appendChild(span);
	list.appendChild(node);
	string.value = "";
	span.setAttribute("contenteditable", "true")
	
	var button = document.createElement('button');
	textnode = document.createTextNode("Del");
	button.appendChild(textnode);
	node.appendChild(button);
	button.addEventListener("click", function(){
		button.parentNode.remove();
	});
	button.setAttribute("class", "add-button right");
}