const users = [
    {
    username: "Yuri Gagarin",
    lang: "ru",
    },
    {
    username: "Nil Armstrong",
    lang: "ENG",
    },
    ];
    
    
    
    let getUserNames = arr => {
      return arr.map(val => val.username)
    }
    let res = getUserNames(users)   
    console.log(res)