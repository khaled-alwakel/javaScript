// challenge 
const string = "i love javascript"

const charCounter={}

function getCount(char){
  let count =0
  for(const i of string){
    if(i==char) count++
  }
  return count
}
for (const i of string){

  charCounter[i]= getCount(i)
}
console.log(charCounter)
