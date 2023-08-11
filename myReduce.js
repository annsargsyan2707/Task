const arr = [1, 2, 3]
function myReduce(arr, cb, acc = arr[0]){
  for(let i = 0; i < arr.length; i++){
    acc = cb(acc, arr[i])
  }
  return acc
}

const res = myReduce(arr, (acc, el)=> {
  return acc += el});
console.log(res)