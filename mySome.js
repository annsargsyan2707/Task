const cb = item => item > 12;
const arr = [1, 12, 25, 4];
const mySome = (arr, cb) => {
  let res;
  for(let i = 0; i < arr.length; i++){
    if (cb(arr[i])){
      res = true;
      break;
    }
  
  }
  return res
}
const res = mySome(arr, cb);
console.log(res)