const result = document.querySelector(".result");
const resultContainer = document.querySelector(".main-result")

const renderResult = (output) => {
    if(typeof output == 'object'){
        output.words.forEach(item => {
            result.innerHTML += `<p>${item} - ${item.length}</p>`;
        })
        result.innerHTML += `<span>The result is ${output.result}</span>`;
    }else{
        result.innerHTML += `<span>The result is ${output}</span>`;
    }

    resultContainer.classList.remove("hidden")
}

export default renderResult;