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
    const getUsernameLengths = arr => {
       return arr.map (val => val.username.length); 
      
    }
    let res = getUsernameLengths(users);                               console.log(res)
        
       