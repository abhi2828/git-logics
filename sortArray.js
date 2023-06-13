// ** sorting of array with for loop

const arr = ['elderberry',  'cherry','apple', 'date', 'banana',];

for(let i = 0; i < arr.length -1; i++){
    if(arr[i] > arr[i + 1]){
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i+1] = temp 
        i = -1
    }
}

console.log('Sorted array:', arr);