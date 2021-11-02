import renderResult from "./renderResult.js";

let moreThanOne = []

const getLongestStr = (arr) => {
    let result, longestStr = ""

    arr.forEach(str => {
        if(str.length > longestStr.length){
            longestStr = str
        }else if(str.length == longestStr.length){
            moreThanOne.push(longestStr)
            longestStr = str
        }
    })

    if(moreThanOne.length >= 1){
        result = [longestStr]
        moreThanOne.forEach(item => {
            if(item.length == longestStr.length){
                result.push(item)
            }
        })

        if(result.length < 2){
            result = longestStr
        }
    }else{
        result = longestStr
    }

    renderResult(result)
}

export default getLongestStr