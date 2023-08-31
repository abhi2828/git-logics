const functionTOFindSmallOrHighestNumber = (array,type,number)=>{
    for(let i = 0; i < array.length -1; i++){
        if(array[i] > array[i + 1]){
            [array[i],array[i + 1]] = [array[i + 1],array[i]]
            i = -1
        }
    }
    console.log('array', array)
   if(array.length >= number){ 
    if(type === 'small'){
        return array[number-1]
    }
    else if(type === 'large'){
        return array[array.length - number]
    }}
    else{
        console.log(`number count cant'not be greater than array length`)
    }
}

console.log('result:', functionTOFindSmallOrHighestNumber([5, 3, 8,0, 2, 1, 4],'small',3))