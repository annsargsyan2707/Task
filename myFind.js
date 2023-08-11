const  arr = [ 25, 14, 7];

const isOdd = item => {
  
    if(item % 2 === 0)
       return true;
  
}
  
let myFind = function (arr, cb) {
 
  for(let i = 0; i < arr.length; i++){
    if(cb(arr[i]))
      return arr[i]
  } 
}
let res = myFind(arr,isOdd )
console.log(res)