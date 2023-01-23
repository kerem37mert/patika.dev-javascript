let taskDom = document.querySelector("#task");
let listDom = document.querySelector("#list");
let items = [];


function newElement()
{
	if(taskDom.value != "")
	{
		items.push(taskDom.value);
		localStorage.setItem("items", items);
		
		let  liveToastInsertDom = document.querySelector("#liveToastInsert");
		liveToastInsertDom.classList.remove("hide");
		liveToastInsertDom.classList.add("show");
		
		let newLi = document.createElement("li");
		newLi.innerHTML = taskDom.value;
		
		let close = document.createElement("span");
		close.innerHTML = "\u00D7";
		close.style.float = "right";
		newLi.appendChild(close);
		
		listDom.append(newLi);
		
		taskDom.value = "";
		
	}
	else
	{
		let  liveToasAlertDom = document.querySelector("#liveToastAlert");
		liveToasAlertDom.classList.remove("hide");
		liveToasAlertDom.classList.add("show");
	}
}


//click

listDom.addEventListener("click",function(event){
	
	if(event.target.tagName === "LI")
	{
		event.target.style.textDecoration = "line-through";		
	}
	
});


//delete
let spans = document.querySelectorAll("#list span");

for(let i=0; i<=spans.length; i++){
	
	spans[i].addEventListener("click",function(){
		
		let li = this.parentElement;
		li.style.display = "none";
		
	});
	
}
