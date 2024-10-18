
const score =400
// console.log(score)
const balance = new Number(100)
// console.log(balance) //basically object we getting and in object whereas methods are there


// console.log(typeof balance.toString()); //string
// console.log(balance.toString().length);//3

const hundreds = 100000;
// console.log(hundreds.toLocaleString('en-IN')); //1,00,000

const otherNumber = 123.8989
// console.log(otherNumber.toFixed(2));

// console.log(otherNumber.toPrecision(3));//124


//properties of number
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)


/////////////////////////////////////MATH


// console.log(Math);

// console.log(Math.round(4.7)); //5
// console.log(Math.ceil(4.1));  //5
// console.log(Math.floor(4.7));  //4 or removing decimal
// console.log(Math.min(3,6,5,700));
// console.log(Math.max(3,6,5,700));


//0 to 10
//console.log(Math.random()) // gave value between 0-1

// console.log(Math.floor(Math.random())*10); //0 to 9
// console.log(Math.floor(Math.random()*10)+1); //1 to 10

//sometimes value after multiplying by 10 is 0.1 and floor gave 0 so to avoid that case we add 1 


//1 to 6
max=6
min=1
console.log(Math.floor(Math.random()*(max-min+1))+min) //1-6

// adding 1 for avoiding zero and adding min becuase itna minimum toh chahiye










