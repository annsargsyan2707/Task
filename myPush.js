const myPush = (arr, item) =>{
  
    arr[arr.length] = item;
    return arr.length;
  }
  const arr = [12, 14, 15, 3, 2];
  let item = 5;
  
  const res = myPush(arr, item);
  console.log(res)