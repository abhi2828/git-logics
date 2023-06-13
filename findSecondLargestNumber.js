// WAP to find Second largest element in an array : arr[] = [12, 35, 1, 10, 34, 1, 35], 
// without sorting, without using any built-in methods and 
// without deleting duplicate elements. What will be the time complexity?



const arr = [12, 35, 1, 10, 34, 1, 35];

const findSecondLargestNumber = (arr)=>{
   let largestNumber = -Infinity 
let SecondLargestNumber = -Infinity

for(let i = 0;i < arr.length ; i++){
    if(largestNumber < arr[i]){
        SecondLargestNumber = largestNumber
        largestNumber = arr[i]
    }
    if(arr[i] > SecondLargestNumber &&  largestNumber !== arr[i] ){
        SecondLargestNumber = arr[i]
    }
}
return SecondLargestNumber
}

console.log('first', findSecondLargestNumber(arr))
