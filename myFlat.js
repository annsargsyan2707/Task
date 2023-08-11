const arr = [7, 17, [24, 5]]
const myFlat = function(arr){
  return arr.reduce(function(a, b){
    return a.concat(b);
  }, [])
}
  
const res = myFlat(arr)
console.log(res)