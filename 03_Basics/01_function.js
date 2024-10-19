function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName() function call 
//sayMyName => reference 

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);



function login_check(username="sam"){ //default parameter
   if(!username) 
    {
        return `please enter a username`
    } 
    return `${username} just logged in`
}

console.log(login_check('deepanshu'));



function CalculateValue(...num){ //rest operator
    return num; 
}

console.log(CalculateValue(100,200)) ////[ 100, 200 ] returns an array 



function CalculateValue(num1,num2,...num){ //rest operator
    return num; 
}

console.log(CalculateValue(100,200,500,1000))  //[ 500, 1000 ]


//handle object
const myobj={
    name:"deepanshu",
    email:"deep@google.com",
    age:32
}

function printObjValue(userObject)
{
  console.log(`username is ${userObject.name} and the age is ${userObject.age}`)
}

//printObjValue(myobj)
printObjValue({
    name:"deepanshu",
    email:"deep@google.com",
    age:32
})

//handle array
function printArrayValue(myArr)
{
  console.log(myArr[3]);
}

printArrayValue([2,3,4,5,6])