const numbers = [1,2,3,4,5,6,7,8,9,10]

// const myArr = numbers.map((num)=>{return num+10}) //automatically map return     
// console.log(myArr)


//by-using for each 
// const myArr=[]
// numbers.forEach((num)=>{
//     myArr.push(num+10)
// })

// console.log(myArr)



//chaining


const finalValue = numbers.map((num)=>(num*10)).map((num)=>num+1).filter((num)=>num>40) //[41,51,61,71,81,91,101]
console.log(finalValue)