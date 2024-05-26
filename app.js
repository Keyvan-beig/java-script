let taskName = document.getElementById("taskName");
let olList = document.querySelector(".task-list > ol")


taskName.addEventListener("keyup",addTask);
function addTask(e){
    if(e.key == "Enter" && taskName.value){
        
        pElement = document.createElement("p");
        inputElement = document.createEle

        pElement.textContent = taskName.value

        olList.appendChild(pElement)
        

    }

}