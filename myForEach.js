const arr = [1, 2, 3];
const cb = (el) => sum += el;
function myForEach (arr, callBack){
for(let i = 0; i < arr.length; i++){
  callBack(arr[i])
}
  
}
myForEach (arr, cb);
console.log(sum)