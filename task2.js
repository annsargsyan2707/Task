let str = 'Have a good night';
const longToAcronym = (str) => {
    let acronym = '';
    let str1 = str.split(' ');

      str1.forEach((i) => {
      acronym += i[0].toUpperCase()
    })
    return acronym
  }
  const res = longToAcronym(str);
  console.log(res)