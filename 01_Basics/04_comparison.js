
console.log("2"==2);//true
console.log("2"===2);//false






console.log(null >=0);//true
console.log(null<=0);//true
console.log(null>0);//false
console.log(null==0);//false

// the reason for null >= 0 is that comparison converts null to number which is 0
//thats why null >= 0 is true and null == 0 is false 


console.log(undefined>0);//false
console.log(undefined>=0);//false
console.log(undefined==0);//false


//data type
// (Primitive or call by value)
//7 types (String,Number,Boolean,Null,Undefined,Symbol,BigInt) //type of string is object key value pair store
// (Reference or Non-Primitive)
// Array,Object,Functions



const number = 123;
const number2 = 123.6;

const value = true;
let temperature=null;
let cityName;//undefined

let id = Symbol('123');
let anotherID = Symbol('123');

console.log(id==anotherID);//false
console.log(id===anotherID); //false

let bigNumber = 1234566765656565n;



//non-primitve (data type is object)

const heros = ["shaktiman","nagraj","doga"];
const myobj={
    name:"deepanshu",
    age:18,
}

const myFunction = function(){
    console.log('hello world');
}

console.log(typeof myobj);//object
console.log(typeof myFunction);//function of object(basically object)
console.log(typeof heros);//object

console.log(typeof cityName);//undefined
console.log(typeof id);//symbol



////////////////////////////////////////////////////////////////


//MEMORY

//STACK(PRIMITIVE DATA TYPES) and HEAP(NON-PRIMITIVE DATA TYPE)

let userOneEmail = "userone@google.com"
let userTwoEmail = userOneEmail;
console.log(userTwoEmail);

userTwoEmail="userTwo@google.com"
console.log(userOneEmail);
console.log(userTwoEmail);


let myobj2 = {
    name:"google",
    email:"one@google.com"
}

let user1 = myobj2;

console.log(myobj2.email);
console.log(user1.email);

user1.email="user1@google.com";
console.log(myobj2.email);
console.log(user1.email);








