
const arr = [1, 14, 18, 12];
function mySlice (arr, a, b = arr.length)  {
  const newArr = [];
  if(a > 0 && b > 0){
    for(let i = a; i < b; i++){
    newArr.push(arr[i])
    }
  } else if (a < 0 && b < 0){
    for(let i = arr.length + a; i < arr.length + b; i++){
    newArr.push(arr[i])
    }
  } else {
    for(let i = arr.length + a; i < arr.length; i++){
    newArr.push(arr[i])
    }
  }
  return newArr
}
const res = mySlice (arr, 1, 2)
console.log(res)