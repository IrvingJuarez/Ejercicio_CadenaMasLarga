const result = document.querySelector(".result");
const resultContainer = document.querySelector(".main-result")
const tryAgainBtn = document.getElementById("try-again");

tryAgainBtn.addEventListener("click", e => {
    e.preventDefault()

    result.innerHTML = "";
    resultContainer.classList.add("hidden")

    if(!document.querySelector(".main-words").classList.contains("hidden")){
        document.querySelector(".addedStrs").innerHTML = "";
        document.querySelector(".main-words").classList.add("hidden")
    }
})

const renderResult = (output) => {
    if(Object.prototype.toString.call(output) == '[object Object]'){
        output.words.forEach(item => {
            result.innerHTML += `<p>${item} - ${item.length}</p>`;
        })
        result.innerHTML += `<br><p>The result is: <i class='rendered-result'>${output.result}</i> </p>`;
    }else{
        result.innerHTML += `<br><p>The result is: <i class='rendered-result'>${output}</i> </p>`;
    }

    resultContainer.classList.remove("hidden")
}

export default renderResult;