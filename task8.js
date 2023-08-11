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
    const filterUsersByLang = arr => {
      return arr.filter(item => item.lang !== "ru" )}
    const res = filterUsersByLang(users);
    console.log(res)