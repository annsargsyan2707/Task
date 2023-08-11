const arr = [1, 2, 3];
function myShift(arr){
  let shifted = arr[0]
  for(let i = 0; i < arr.length-1; i++){
    
    arr[i] = arr[i + 1]
    }
    arr.length = arr.length -1
    return shifted
  }
  const res = myShift(arr);
  console.log(res)