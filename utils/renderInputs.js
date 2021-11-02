import getLongestStr from "./getLongestStr.js";

let strs = []
const addedStrsContainer = document.querySelector(".addedStrs")

const renderInputs = () => {
    let wordsForm = document.querySelector(".main-words")
    wordsForm.classList.remove("hidden")

    let strInput = document.querySelector("input[type=text]")
    let addBtn = document.getElementById("add")
    let runBtn = document.getElementById("run")

    strInput.addEventListener("input", e => {
        if(e.target.value.length >= 1){
            addBtn.disabled = false
        }else{
            addBtn.disabled = true
        }
    })

    addBtn.addEventListener("click", () => {
        strInput.value = strInput.value.trim()
        strs.push(strInput.value)
        addedStrsContainer.innerHTML += `<p>${strInput.value} - ${strInput.value.length}</p>`
        strInput.value = ""
        addBtn.disabled = true

        if(strs){
            runBtn.disabled = false
        }
    })

    runBtn.addEventListener("click", () => {
        getLongestStr(strs)
        strs = []
        runBtn.disabled = true
    })
}

export default renderInputs;