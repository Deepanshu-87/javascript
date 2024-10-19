let a  =300

local(Block-level) scope
{
    let a=20;
    const b=10;
    var c=30;
    console.log("Inner: ",a);
    
}

console.log(a); //a is not defined
console.log(b); //b is not defined
console.log(c); //c =30 print(problem)


 console.log(a); //300


//imp 
//when you inspect and go to console and check global scope in browser vo alag h as compared to when you
//when you check on node terminal global scope





// function one(){
//     const username = "deepanshu"
//     function two(){
//         let name="hello"
//         console.log(username)
//     }
//     console.log(name);    //error
//     console.log(username) //deepanshu
//     two()
// }

//one() //first this call

//username access inside two() function but name cant be access outside two() function(ice-cream example)

//closure=> usually parent var access by inside child function, vice-versa not true




//hoisting(js move declaration at the top)
console.log(addOne(4)); //5
function addOne(num)
{
    return num+1;
}

console.log(addTwo(4)) //error 
addTwo=function(number){
    return number+2;
}




