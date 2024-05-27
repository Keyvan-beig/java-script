let taskName = document.getElementById("taskName");
let olList = document.querySelector(".task-list > ol")

let taskList = [];

const listAdd = (arrayName , taskName) => {

    const task = {
        name: taskName,
        type: "pending"
    }

    arrayName.push(task)

}

function showTask(_item,isCheck) {

    const inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.checked = isCheck === "compeleted" ? "checked" : ""


    const pElement = document.createElement("p");
    pElement.textContent = _item;

    const div_1 = document.createElement("div");

    div_1.appendChild(inputElement);
    div_1.appendChild(pElement);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    const editeButton = document.createElement("button");
    editeButton.textContent = "Edite";

    const divButtons = document.createElement("div");

    divButtons.appendChild(deleteButton);
    divButtons.appendChild(editeButton);

    const pTag = document.createElement("p");
    pTag.textContent = "...";

    const div_2 = document.createElement("div");

    div_2.appendChild(pTag);
    div_2.appendChild(divButtons);

    const liTag = document.createElement("li");

    liTag.appendChild(div_1);
    liTag.appendChild(div_2);

    olList.appendChild(liTag);

}

function showTasksList(item){

    item.forEach((_item)=>{

        showTask(_item.name,_item.type)

    })

}

showTasksList(taskList)

taskName.addEventListener("keyup", addTask);

function addTask(e) {
    if (e.key == "Enter" && taskName.value) {

        listAdd(taskList , taskName.value)

        showTask(taskName.value,"pending")

    }

}



