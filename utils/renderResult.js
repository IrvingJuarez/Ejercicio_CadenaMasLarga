const result = document.querySelector(".result");
const resultContainer = document.querySelector(".main-result")

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