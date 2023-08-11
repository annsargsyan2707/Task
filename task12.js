const arr = [ 21, 55, 77];
const sortBy = (arr, str = "Asc") => {
    return arr.sort((a, b) => {
  if (str === "Desc")
    return b - a
  else if(str === "Asc")
    return a - b
  })
}
const res = sortBy(arr, "Desc");
console.log(res)