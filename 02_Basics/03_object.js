//singleton
//Object.create() => object made by constructor is singleton object


// object literals => object made by literals is not singleton object
//const obj = {}
const mysym = Symbol('my key');
const myobj = {
    name: "deepanshu",
    age: 18,
    city: "delhi",
    "full name":"deepanshu kumar",
     [mysym] : "key-1" //symbol as a key act mysym:'key-1' simply yha mysym is a string key not a symbol key

}
//console.log(myobj.name);

// console.log(myobj['name']); //by-default key is of type string
//console.log(myobj.full_name) //undefined

// console.log(myobj['full name']) //only one way of printing 

// console.log(myobj[mysym]);



// myobj.name = "sharma"
// Object.freeze(myobj);
// myobj.name='rajput'
// console.log(myobj);



myobj.greetings = function(){
    console.log('hello world');
}
myobj.greetings2 = function(){
    console.log(`hello my name is ${this.name}`);
}

console.log(myobj.greetings());
console.log(myobj.greetings2());

