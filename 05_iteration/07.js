const number = [1,2,3,4,5]

const initializer = 0
const sumWithCurrentValue = number.reduce((accumulator,currentValue)=>accumulator+currentValue,initializer)
console.log(sumWithCurrentValue)




const no = [1,2,3]
const sum = no.reduce(function(acc,currval){
   return acc+currval
},0)  //comma ke baad jo bhi value doge accumulator ko vo value mil jayegi

// console.log(sum)



const shoppingCart=[
    {
        name:'js',
        price:1000
    },
    {
        name:'python',
        price:10000
    },
    {
        name:'app dev',
        price:8500
    }
]

const price = shoppingCart.reduce((acc,currentObj)=>acc+currentObj.price,0)
console.log(price)