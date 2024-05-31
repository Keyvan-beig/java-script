const headingDiv = document.querySelectorAll(".heading");
const dialogDivs = document.querySelectorAll(".heading div");

headingDiv.forEach((item)=>{

    const h5Tag = item.querySelector("h5")
    const dialogDiv = item.querySelector("div")

    h5Tag.addEventListener("click",()=>{

        const isActive = dialogDiv.classList.contains("dis_block")
        
        dialogDivs.forEach((_item)=>{
            _item.classList.remove("dis_block");
        
        })

        if(isActive){

            dialogDiv.classList.remove("dis_block")

        }else{

            dialogDiv.classList.add("dis_block")

        }
    })
})