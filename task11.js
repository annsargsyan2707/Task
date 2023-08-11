const users = [
    {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
    },
    {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
    },
    ];
    const getAverageAge = arr => {
      let sum = 0;
      return arr.reduce((acc, item) => {
       return acc += item.age/ arr.length;
        
    
    }, 0)
      
    }
    const res = getAverageAge(users);
    console.log(res)s