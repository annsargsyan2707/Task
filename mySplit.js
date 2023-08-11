
const mySplit = function (string, simbol){
    const arr = [];
    let str1 = "";
      for (let i = 0; i < string.length; i++) {
    
         if(simbol === ''){
              str1 = string[i];
              arr.push(str1);
              str1 = "";
          }   
         else if(string[i] === simbol){ 
                arr.push(str1);
                str1 = "";
            } 
           else if(i === string.length -1){
                str1 += string[i]; 
                arr.push(str1);
                str1 = "";
              }
          else
                str1 += string[i];
              
      }
    return arr
  
  }
  let res = mySplit(, "5")
  console.log(res )