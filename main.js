let buttons = [...document.querySelectorAll(".btn")];

const clickHandler = (e) => {
    e.preventDefault()
    
    if(e.target.id == "chosen"){
        console.log("Chosen")
    }else{
        console.log("Random")
    }
}

buttons.forEach(btn => {
    btn.addEventListener("click", clickHandler)
})