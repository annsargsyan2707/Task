const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];
const doArrayConoat = (arr1, arr2) => {
  return arr1.concat(arr2);
}
  
const res = doArrayConoat( arr1, arr2 )
console.log(res)

// tarberak 2
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];
const doArrayConoat = (arr1, arr2) => {
  return [...arr1, ...arr2];
}
  
const res = doArrayConoat( arr1, arr2 )
console.log(res)