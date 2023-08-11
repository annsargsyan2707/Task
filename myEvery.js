const arr = [11, 2, 3, 4];
const cb = item => item > 1;
function myEvery(arr, cb){
  for(let i = 0; i < arr.length; i++){
    if(!cb(arr[i]))
    return false;
    
    }
    return true;
  }
  const res = myEvery(arr, cb);
  console.log(res)