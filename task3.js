let obj = {
    a: 1,
    e: 1, 
    i: 1,
    o: 1,
    u: 1,
    l: 1,
    n: 1,
    r: 1,
    s: 1,
    t: 1,
    d: 2,
    g: 2,
    b: 3,
    c: 3,
    m: 3,
    p: 3,
    f: 4,
    h: 4,
    v: 4,
    w: 4,
    y: 4,
    k: 5,
    j: 6,
    x: 6,
    q: 7,
    z: 7
    };
  const sumOfLetters = (obj, str) => {
    let str1 = str.split("");
    return  str1.reduce((acc, item) =>{
       acc += obj[item] 
    return acc
    }, 0)
    
    
  }
  const res = sumOfLetters(obj,"dog");
  console.log(res)
  
  
  //tarberak 2
  
  let arr = ["aeioulnrst", "dg", "bcmp", "fhvwy", "k", "jx", "qz"];
  let str = "dog";
  let str1 = str.split("")
  const  sumOfLetters = (arr, str1) => {
    return str1.reduce((acc, val) => {
   arr.forEach((item, index) => {
      if(item.includes(val)) acc += index +1
      
    })
      return acc
  }, 0)
  }
  const res = sumOfLetters(arr, str);
  console.log(res)