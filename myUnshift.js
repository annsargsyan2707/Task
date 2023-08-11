const arr = [1, 2, 3];
function myUnshift(arr, el) {
  let len = arr.length;
  for(let i = len; i > 0; i--){
    arr[i] = arr[i - 1];
  }
  arr[0] = el;
  return arr.length;
}
const res =  myUnshift(arr, 4);
console.log(res)

//tarberak 2
function myUnshift(arr, ...args){
  let len = arr.length;
  let argsLen = args.length;
  let newLen = len + argsLen - 1;
  for(let i = newLen; i > len - 1; i--){
    arr[i] = arr[i - argsLen];
    
  }

  for(let i = argsLen - 1; i >= 0; i--){
    arr[i] =  args[i]
  }
  return arr.length
}
const res =  myUnshift(arr, 4, 5, 6);
console.log(res)
