const users = [
    {
      firstname:"Alex", 
      lastname:"M",
      age:25
    },
    {
      firstname:"Mohan", 
      lastname:"B",
      age:25
    },
    {
      firstname:"Blake", 
      lastname:"R",
      age:2
    },
  ]
    
  const result = users.filter((elem) => {
    return elem.age === 25
  })
  
  console.log(result)