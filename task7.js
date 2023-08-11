// const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi',     null,166, NaN]
// let getNumbers = arr => {
//   return arr.filter(item => typeof(item) === "number" && !isNaN(item))
// }
// let res = getNumbers(arr)
// console.log(res)

const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi',                 null, 166, NaN];
const getNumbers = arr => {
  return arr.filter(item => Number.isFinite(item))
}
const res = getNumbers(arr)
console.log(res)