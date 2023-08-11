// const arr = [14, 25, 32, 7];
// const cb = item => item 
// let myFilter = function (arr, (cb)){
//   let filteredArr = [];
//   for(let i = 0; i < arr.length; i++){
//     if(cb(arr[i])){
//       filtered.push(arr[i])
//     }
//   }
//   return filtered
  
// }
// let res = myFilter(arr, cb)
// console.log(res)
const  arr = [14, 25, 32, 2, 7];

const isPrimitive = item =>{
  for(let i = 2; i < item / 2; i++){
    if(item % i === 0)
      return false;
  }
      return true;
}
  
let myFilter = function (arr, cb){
  let filteredArr = [];
  for(let i = 0; i < arr.length; i++){
    if(cb(arr[i])){
      filteredArr.push(arr[i])
    }
  }
  return filteredArr
  
}
let res = myFilter(arr,isPrimitive )
console.log(res)
