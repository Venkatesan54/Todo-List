var input = document.getElementById("in");
var ul = document.getElementById("listcontainer");
var todo = document.getElementById("sec");

function add()
{
    if(input.value==='')
    {
        alert("You must Write something")
    }
    else{
        let list = document.createElement("li");
        list.innerHTML=input.value;
        ul.appendChild(list);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        list.appendChild(span)
    }
    input.value="";
    savedata();
}

ul.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false)

function savedata()
{
    localStorage.setItem("data",ul.innerHTML);
}

function showitem(){
    ul.innerHTML=localStorage.getItem("data");
}

showitem();