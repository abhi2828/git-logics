const reverseNumFun=(number)=>{
    let reversedNum = 0
    while (number !==0) {
        reversedNum = (reversedNum * 10) + (number % 10)
        number = Math.floor(number/10)        
    }
    return reversedNum
}

console.log('reverse Number :', reverseNumFun(12345678))