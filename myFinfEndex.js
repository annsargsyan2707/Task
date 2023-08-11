const cb = item => item >= 2;
function myfindEndex (arr, cb) {
  let index = -1;
  for(let i = 0; i < arr.length; i++){
    if(cb(arr[i])){
      index = i;
      break;
    }
  }
  return index;
}
const arr = [1, 2, 8, -4];
const res = myfindEndex (arr, cb);
console.log(res)