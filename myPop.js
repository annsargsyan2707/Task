const arr = [12, 14,15,3, 2];

const myPop = arr => {
  let poped = arr[arr.length -1]
  arr.length = arr.length - 1
  return poped
}
const res = myPop(arr);
console.log(res)