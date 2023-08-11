const cb = item => item * 2;
const arr = [1, 2, 4]
function myMap(arr, cb) {
  const newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr.push(cb(arr[i]))
  }
  return newArr;
}
const res = myMap(arr, cb);
console.log(res)