
const btn = document.getElementById("get-btn");


async function getQuote() {

    btn.classList.add("loading")
    btn.innerText = "Get New Quote..."

    const url = "https://api.quotable.io/random"

    const apiQuote = await fetch(url);

    const quote = await apiQuote.json()

    showQuote(quote)

}

function showQuote(param) {

    const text = document.getElementById("quote-p");
    text.textContent = param.content

    const author = document.getElementById("author-name");
    author.textContent = param.author

    btn.classList.remove("loading")
    btn.innerText = "New Quote"

}

getQuote()

document.getElementById("copy").addEventListener("click",()=>{

    const textCopy = document.getElementById("quote-p").innerText

    navigator.clipboard.writeText(textCopy)

})