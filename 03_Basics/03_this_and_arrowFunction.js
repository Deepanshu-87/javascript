const obj={
    username:"deepanshu",
    email:"deepanshu@google.com",
    age:40,
    greeting:function(){
        console.log(`${this.username}, just logged in`)
        console.log(this);//obj print
    }

}
console.log(this) //{} 
//imp
//browser mein when you console you get and window object and when you console in node env you get empty obj
//because pehle ke time pr only one engine paaya jaata tha and abhi ke time pr us engine ko nikal liya h or alg naming
//kr di h eg-node,bun so when it run on browser then browser ke andr obj is window obj and when it run on node it refers to {}
//empty obj 

obj.greeting()
obj.username="hitesh"
//obj.greeting()





//this. only work in obj property and its methods

const fun1 = function chai(){
    let username = "deepanshu"
    console.log(this.username); //undefined
    console.log(this); //baada sa obj print(global object print)
    
}
fun1()

const fun2 = ()=>{
    let username ="deepanshu"
    console.log(this.username);//undefined
    console.log(this); //{} empty obj print
}
fun2()


//basic arrow function
const fun3 = (num1,num2)=>{
  return num1+num2
}

console.log(fun3(1,2))

//implicit return(one line statement)
const fun4 = (num1,num2)=> num1+num2 //by default it means return num1+num2
console.log(fun4(6,7))

const fun5 = (num1,num2)=> (num1+num2) //no need to write return in curly brackers
console.log(fun4(6,7))  //mostly uses in react 



//returning object 
const fun6=(num1,num2)=>({username:"deep"})
console.log(fun6(6,7))   //{ username: 'deep' }


//ways of function defining
//function(){}
//()=>{} 
//()=>()  no need to write return 