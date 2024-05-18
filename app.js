
const accordion = document.querySelectorAll(".heading");

accordion.forEach((_item) => {

    _item.addEventListener("click", () => {

        _item.classList.remove('d-none')

        accordion.forEach((_item1)=>{

            _item1.classList.remove('d-block')
            
        })

        _item.classList.toggle('d-block')

    })
});