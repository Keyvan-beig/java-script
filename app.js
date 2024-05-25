const taskName = document.getElementById("taskName");
const deleteAllButton = document.getElementById("deleteAll");
const filterButton = document.querySelectorAll(".filter button");
const olTag = document.querySelector(".task-list ol");
let showAllButton = document.getElementById("all");
let PendingButtm = document.getElementById("Pending");
let completedButtm = document.getElementById("completed");

taskName.addEventListener("keyup", addNewTask)

function addNewTask(e) {

    if (taskName.value && e.key === "Enter") {

        let div_1 = document.createElement("div");

        let div_2 = document.createElement("div");

        div_2.classList.add("dialog-box");

        let inputCheckBox = document.createElement("input");

        inputCheckBox.type = "checkbox";

        let liTag = document.createElement("li");

        let deleteButton = document.createElement("button");

        deleteButton.innerText = "Clear"

        let pTag = document.createElement("p")

        pTag.textContent = taskName.value;

        deleteButton.addEventListener("click", () => olTag.removeChild(liTag));

        let editeButton = document.createElement("button");

        editeButton.innerText = "Edite";

        editeButton.addEventListener("click", () => {

            taskName.value = pTag.innerText;

            taskName.removeEventListener("keyup", addNewTask);

            taskName.addEventListener("keyup", editeTask);

            function editeTask(e) {

                if (e.key === "Enter" && taskName.value) {

                    pTag.innerText = taskName.value

                    taskName.removeEventListener("keyup", editeTask);

                    taskName.addEventListener("keyup", addNewTask);

                    taskName.value = "";

                }
            }
        })

        let divButtons = document.createElement("div");

        divButtons.classList.add("disp-none");

        let pDialog = document.createElement("p");

        pDialog.innerText = "..."

        pDialog.addEventListener("click", () => {

            let dialogsDiv = document.querySelectorAll(".dialog-box div");

            let checkOpen = divButtons.classList.contains("disp-none")

            dialogsDiv.forEach((_item) => {

                _item.classList.add("disp-none")

            })

            if (checkOpen) {

                divButtons.classList.remove("disp-none")

            }
        })

        divButtons.addEventListener("mouseleave", () => {

            divButtons.classList.add("disp-none")

        })

        divButtons.appendChild(deleteButton);

        divButtons.appendChild(editeButton);

        div_1.appendChild(inputCheckBox);

        div_1.appendChild(pTag);

        div_2.appendChild(divButtons);

        div_2.appendChild(pDialog)

        liTag.appendChild(div_1);

        liTag.appendChild(div_2);

        olTag.appendChild(liTag);

        taskName.value = ""

        inputCheckBox.addEventListener("change", () => {
            if (inputCheckBox.checked) {

                pTag.style.textDecoration = "line-through"

            } else {

                pTag.style.textDecoration = ""

            }
        })
    }
}

PendingButtm.addEventListener("click", () => {

    //change color selected button//
    filterButton.forEach((_item) => {
        _item.style.color = "black";
    })

    PendingButtm.style.color = "blue";

    //show pending tasks//
    let all_li = document.querySelectorAll(".task-list ol li");

    all_li.forEach((_item) => {

        let isCheck = _item.getElementsByTagName("input")[0].checked;

        if (isCheck) {
            _item.style.display = "none"
        } else {
            _item.style.display = "flex"
        }

    })

})

completedButtm.addEventListener("click", () => {

    //change color selected button//
    filterButton.forEach((_item) => {
        _item.style.color = "black";
    })

    completedButtm.style.color = "blue";

    //show completed tasks//
    let all_li = document.querySelectorAll(".task-list ol li");

    all_li.forEach((_item) => {

        let isCheck = _item.getElementsByTagName("input")[0].checked;

        if (isCheck) {
            _item.style.display = "flex"
        } else {
            _item.style.display = "none"
        }

    })

})

showAllButton.addEventListener("click", () => {

    filterButton.forEach((_item) => {
        _item.style.color = "black";
    })

    all.style.color = "blue";

    let all_li = document.querySelectorAll(".task-list ol li");

    all_li.forEach((_item) => {

        _item.style.display = "flex";
    })

})

deleteAllButton.addEventListener("click", () => olTag.innerHTML = '');







