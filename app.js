let number = ["0","1","2","3","4","5","6","7","8","9","Backspace"]

function valds(e){

    let check = number.find((item)=>{
        return item === e.key
    })
    
    if(check === undefined){
        e.preventDefault();
        alert("please enter number")
    }

}

