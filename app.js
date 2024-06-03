const txt = document.getElementById("txt");
const alertText = document.querySelector(".container p")
let check = false

window.addEventListener("mouseover",()=>txt.focus())

txt.addEventListener("keydown", (e) => {

    let textValue = txt.value;

    textValue = Object.values(textValue)

    textValue.forEach((item) => {

        if (e.key === item) {
            check = true
        }
    });

    if (check) {

        e.preventDefault()

        alertText.classList.remove("disp-none")

    } else {

        alertText.classList.add("disp-none")
    }

    check = false
})


