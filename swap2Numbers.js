// Swap Values without using any variable a=10, b=12


// let a = 2;
// let b = 3;

// [a, b] = [b, a];

// console.log("a =", a)
// console.log("b =", b)

const findLargeNumber = (arr)=>{
    let large // 200
    let ele1
    let ele2
    for (let i = 0; i < arr.length; i++) {
        large = arr[0];  
        ele1 = arr[i];  // 51
        ele2 = arr[i+1]; // 8

        if (arr[i] < arr[i+1]) {
            large = arr[i+1]
            
        }

        // if (large < arr[i+1] && arr[i] < arr[i+1] ) {
        //     large = arr[i+1] //45
        // }
        
        // console.log(i, ele1,ele2)
    }
    return large
}

console.log(findLargeNumber([20,1,51,8,5]));