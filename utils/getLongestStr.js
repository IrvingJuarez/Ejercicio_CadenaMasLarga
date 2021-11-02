let moreThanOne = []

const getLongestStr = (arr) => {
    let longestStr = ""
    console.log(arr)

    arr.forEach(str => {
        if(str.length > longestStr.length){
            longestStr = str
        }else if(str.length == longestStr.length){
            moreThanOne.push(longestStr)
            longestStr = str
        }
    })

    console.log(moreThanOne)
    console.log(longestStr)
}

export default getLongestStr