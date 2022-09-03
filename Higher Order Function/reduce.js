const user = [
    {
      firstname:"Alex", 
      lastname:"M",
      age:25
    },
    {
      firstname:"Mohan", 
      lastname:"B",
      age:27
    },
    {
      firstname:"Blake", 
      lastname:"R",
      age:25
    },
  ]
  
  
  const result = user.reduce((acc, curr) => {
    if(acc[curr.age]) {
      acc[curr.age]++  
    } else {
      acc[curr.age] = 1
    }
    
    return acc    
  }, {})