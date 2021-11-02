import getLongestStr from "./utils/getLongestStr.js";
import renderInputs from "./utils/renderInputs.js";

let buttons = [...document.querySelectorAll(".btn")];
let result = document.querySelector(".result")
let arr = []

const renderResult = (flag) => {
    if(flag){
        result.textContent = "Oops, there was an error. Try again"
        result.classList.remove("hidden")
        result.classList.add("err")
    }
}

const randomHandler = async () => {
    let apiURL = "http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=5&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"
    
    try{
        arr = []
        let response = await fetch(apiURL)
        let data = await response.json()

        data.forEach(item => {
            arr.push(item.word)
        })

        getLongestStr(arr)
    }catch(err){
        renderResult(true)
    }
}

const chosenHandler = () => {
    renderInputs()
}

const clickHandler = (e) => {
    e.preventDefault()
    
    if(e.target.id == "chosen"){
        chosenHandler()
    }else{
        randomHandler()
    }
}

buttons.forEach(btn => {
    btn.addEventListener("click", clickHandler)
})