// ******************************** 1]  eliminate dublicate values from array   ********************************************

const arr2 = ['m','a','n', 'b', 'a'];

let newArrr  = []
arr2.filter(e=>!newArrr.includes(e) && [...newArrr,e])


// ******************************** 2]  reverse String  ********************************************


const reverseStr = (str)=>{
    let newStr = ''
    for(let i = str.length-1;i>=0;i-- ){
        newStr+=str[i]
    }
    return newStr
}
// console.log('reverseStr', reverseStr('abc'))


// ******************************** 3]  reverse Number  ********************************************

//2. WAP to reverse an integer without converting it to a string, without using any builtin methods. 

const reverseNumber=(number)=>{ 
    let reverseNumber = 0  
    
    while (number !== 0) {
        reverseNumber = (reverseNumber*10) + (number%10) 
        number = Math.floor(number/10)  
    }
    return reverseNumber
}

// console.log('reverseNumber', reverseNumber(12345))

// ******************************** 4]  find Palindrome  ********************************************

const isPalindrome=(str)=>{
    let revStr = ""
    for(let i = str.length-1;i>= 0; i-- ){
        revStr += str[i]
    }
    return revStr === str ? true : false
}
// console.log('isPalindrome', isPalindrome("abba"))


// ******************************** 5]  sort array  ********************************************

// if - arr[0] > arr[1] --- store arr[0] in temp var and arr[1] at 0 index & arr[0] at index 1 repeat till end of length & if at end put i= -1  to check from start each time


const sortArr=(arr)=>{
    // debugger
    for(let i=0; i<=arr.length-1; i++){
        let temp
        if (arr[i] > arr[i+1]) {
            temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp 
            i = -1  
        }  
    } 
    return arr
}

// console.log('sortArr', sortArr([5,8,10,7,11,2,1]))
// console.log('sortArr', sortArr(["d","b","g","s","f"]))



// ******************************** 6]      String to array             ********************************************

// 4. array to String
const strToArr=(str)=>{
    let newArr = []

    for (let i = 0; i < str.length; i++) {
        newArr[newArr.length] = str[i];        
    }
    return newArr
}
// console.log('strToArr', strToArr('god'))

// ******************************** 7]      array to String             ********************************************

const arrTOStr=(arr)=>{
    let str = ""

    for (let i = 0; i < arr.length; i++) {
        str += arr[i]
    }
    return str
}
// console.log('arrTOStr', arrTOStr([ 'g', 'o', 'd' ]))


// ******************************** 8]      find Anagram             ********************************************


const findAnagram=(str1,str2)=>{

    // strToArr() -- convert str to arr 
    // sortArr() -- did array sorting
    // arrTOStr() -- convert arr to str to compare both string
    
   return  arrTOStr(sortArr(strToArr(str1))) === arrTOStr(sortArr(strToArr(str2)))  ? true : false  
   
   }
   
   
//    console.log('is it Anagram', findAnagram('go2d','dog2'))
//    console.log('is it Anagram', findAnagram('god','dog2'))
