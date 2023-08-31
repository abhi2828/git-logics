// ** sorting of array with for loop
//Solution 1 : optimize code with temperary veriable

const arr = [5, 3, 8,0, 2, 1, 4];

for(let i = 0; i < arr.length -1; i++){
    if(arr[i] > arr[i + 1]){
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i+1] = temp 
        i = -1
    }
}

// console.log('Sorted array:', arr);



//Solution 2 : optimize code without temperary veriable


// const arr2 = ['m','a','n', 'b', 'a'];

// for(let i = 0; i < arr2.length -1; i++){
//     if(arr2[i] > arr2[i + 1]){
//         [arr2[i],arr2[i + 1]] = [arr2[i + 1],arr2[i]]
//         i = -1
//     }
// }


// console.log('Sorted array:', arr2);