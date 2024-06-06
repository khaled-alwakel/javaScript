
function checkBiggestNum(word){
    return Math.max(...word.split('').map(ele=>+ele).sort())
}
console.log(checkBiggestNum('971283678'))

