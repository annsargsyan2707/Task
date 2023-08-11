
const arr = ["1", "px", "2323"];
const parseInteger = arr => {
      return arr.map(item => {
  
   if (isNaN(item))
      return "null";
   else 
     return +item;
  
 })
}
let res = parseInteger(arr)
console.log(res)
