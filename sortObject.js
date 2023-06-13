const data=[{name: 'datta'},{name:'abhay'},{name:'shiva'}]
// let newArry = (((data.map(e=> Object.values(e))).flat()).sort()).map(e=>({name:e}))
// console.log('newArry', newArry)

// ** array sorting with for loop
let newArry = []
let finalArry = []
for(let i = 0 ; i < data.length ; i++){
    console.log('name', data[i].name)
    newArry[newArry.length] = data[i].name    
}
if(newArry.length > 0){
        for(let i = 0 ; i < newArry.length ; i++){
            finalArry[finalArry.length] = {name:newArry[i]}
        }
    }
console.log('newArry', newArry)
console.log('finalSortedArray', finalArry)
