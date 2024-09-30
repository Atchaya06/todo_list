const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");
console.log(listcontainer)
document.getElementById("add-btn").addEventListener("click",addtask);
addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
        addtask()
    }
        
})
function addtask() {
    if(inputbox.value==""){
        alert("you must write something!!!");
     }else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
       
        let span=document.createElement("span");
        span.innerHTML="<i class='fa-solid fa-trash-can'></i>";
        li.appendChild(span);
        listcontainer.appendChild(li);

    }
    inputbox.value="";
    saveData();
}
//save data to local storage
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML)
}
listcontainer.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveData();

    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
    
},false);
//fetch data from localStorage
function showtask(){
    listcontainer.innerHTML=localStorage.getItem("data")
}
showtask();
