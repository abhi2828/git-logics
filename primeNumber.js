const test = (num)=>{
    let counter = 0

    for (let i = 1; i <= num; i++) {
      if ( num % i === 0  )  {
        counter += 1
      } 
          
    }
    return counter < 3 ? `${num} is prime Number` : `${num} is not prime Number`
    }

console.log(test(5))