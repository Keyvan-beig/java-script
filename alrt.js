const alrt = (element) => {

    const alrt_show =
    `<div>
        <p>با موفقیت اضافه شد</p>
    </div>`

    element.innerHTML = alrt_show

    setTimeout(()=>{

        element.innerHTML = ''

    },3000)

}

export default alrt