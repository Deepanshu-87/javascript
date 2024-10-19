
// const chai = ()=>{
//     console.log('hello world')
// }
// chai()


//IIFE => 01. vo function jo immediately execute ho jaaye
// 02. global scope ke mein jo bhi declare hai usko hatane ke liye IIFE use

(function chai2()
{ //named IIFE
    console.log('chai is ready')
})();

(function fun(){
    console.log('deepanshu')
})();

(()=>{
    //Unnamed IIFE
    console.log('arrow function')
})(); //semicolon must for end one function vrna second IIFE not run


((username)=>{
    //Parameterized IIFE
    console.log(`${username}, just logged in`)
})('deepanshu');



