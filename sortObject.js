const data=[{name: 'datta'},{name:'abhay'},{name:'shiva'}]

// ** array sorting with buit-in methods
// let newArry = (((data.map(e=> Object.values(e))).flat()).sort()).map(e=>({name:e}))
// console.log('newArry', newArry)

// ** array sorting with for loop
let newArry = []
let finalArry = []
for(let i = 0 ; i < data.length ; i++){
    console.log('name', data[i].name)
    newArry[newArry.length] = data[i].name     
}

for(let i = 0; i < newArry.length -1; i++){
    if(newArry[i] > newArry[i + 1]){
        let temp = newArry[i]
        newArry[i] = newArry[i + 1]
        newArry[i+1] = temp 
        i = -1
    }
}  

if(newArry.length > 0){
        for(let i = 0 ; i < newArry.length ; i++){
            finalArry[finalArry.length] = {name:newArry[i]}
        }
    }
console.log('newArry', newArry)
console.log('finalSortedArray', finalArry)

