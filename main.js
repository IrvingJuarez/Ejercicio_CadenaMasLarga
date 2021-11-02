let buttons = [...document.querySelectorAll(".btn")];
let arr = []

const randomHandler = async () => {
    let apiURL = "http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"
    
    try{
        let response = await fetch(apiURL)
        let data = await response.json()
        console.log(data)
    }catch(err){
        console.log(err)
    }
}

const chosenHandler = () => {
    console.log("Chosen")
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