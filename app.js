const list = document.getElementById("listName");
const deleteAllButton = document.getElementById("deleteAll");
const filterDiv = document.querySelectorAll(".filter button");
let olTag = document.querySelector(".lists ol");

list.addEventListener("keyup",addList)

function addList(e) {

    if (list.value && e.key === "Enter") {

        let div_1 = document.createElement("div");

        let div_2 = document.createElement("div");

        let input = document.createElement("input");

        input.setAttribute("type","checkbox")

        let liTag = document.createElement("li");

        let deleteButton = document.createElement("button");

        deleteButton.innerText = "Clear"

        deleteButton.addEventListener("click",deleteItem)

        function deleteItem() {
        
            olTag.removeChild(liTag)
           
        }

        let pTag = document.createElement("p")

        pTag.innerText = list.value;

        div_1.appendChild(input);

        div_1.appendChild(pTag);

        div_2.appendChild(deleteButton);

        liTag.appendChild(div_1);

        liTag.appendChild(div_2);

        olTag.appendChild(liTag);

        list.value = ""

        input.addEventListener("change",overLine)

    }
}

let PendingButtm = document.getElementById("Pending");

PendingButtm.addEventListener("click",showPending)

function showPending(){

    filterDiv.forEach((_item)=>{
        _item.style.color = "black";
    })

    PendingButtm.style.color = "blue";

    let ol = document.querySelectorAll(".lists ol li");

    ol.forEach((_item)=>{

        let isPending = _item.getElementsByTagName("input")[0].checked;

        if(isPending){
            _item.style.display = "none"
        }else{
            _item.style.display = "flex"
        }

    })

}


let completedButtm = document.getElementById("completed");

completedButtm.addEventListener("click",showCompleted)


function showCompleted(){

    filterDiv.forEach((_item)=>{
        _item.style.color = "black";
    })

    completedButtm.style.color = "blue";

    let ol = document.querySelectorAll(".lists ol li");

    ol.forEach((_item)=>{

        let isCompleted = _item.getElementsByTagName("input")[0].checked;

        if(isCompleted){
            _item.style.display = "flex"
        }else{
            _item.style.display = "none"
        }

    })

}

let all = document.getElementById("all");

all.addEventListener("click",showAll)

function showAll(){

    filterDiv.forEach((_item)=>{
        _item.style.color = "black";
    })

    all.style.color = "blue";

    let ol = document.querySelectorAll(".lists ol li");

    ol.forEach((_item)=>{

        _item.style.display = "flex";
    })

}



function overLine() {

    let ol = document.querySelectorAll(".lists ol li");

    ol.forEach((_item)=>{

        let isCheck = _item.getElementsByTagName("input")[0].checked;

        let pTag = _item.getElementsByTagName("p")[0];

        if(isCheck){
            pTag.style.textDecoration = "line-through"
        }else{
            pTag.style.textDecoration = "blink"
        }

    })

}

deleteAllButton.addEventListener("click",deleteAll);

function deleteAll(){

    olTag.innerHTML = ''
}







