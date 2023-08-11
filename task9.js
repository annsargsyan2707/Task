const users = [
    {
      username: "Yuri Gagarin",
      lang: "ru",
      isAstronaut: true,
    },
    {
      username: "Nil Armstrong",
      lang: "ENG",
      isAstronaut: true,
    },
    {
      username: "Elon Musk",
      isAstronaut: false,
    },
  ];
  const filterByField = (arr, key) => {
    return arr.filter(item => {
      if (item[key])
        return item
    })
  }
  const res = filterByField(users, "isAstronaut");
  console.log(res)