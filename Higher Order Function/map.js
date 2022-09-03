const user = [
    {
      firstname: "Alex",
      lastname: "M",
      age: 25
    },
    {
      firstname: "Mohan",
      lastname: "B",
      age: 27
    },
    {
      firstname: "Blake",
      lastname: "R",
      age: 28
    }
  ];
  
  const result = user.map((elem) => {
    elem.fullame = elem.firstname.concat(elem.lastname);
    return elem;
  });
  console.log(result);
  