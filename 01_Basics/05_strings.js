const name = "deepanshu"
console.log(typeof name);
const name2 = new String('dk');
console.log(typeof name2); //type is object



const myRepo = 20;

console.log(name+myRepo+" value");
console.log(`my name is ${name} and my repo is ${myRepo}`) //best way


const name3 = new String('javascript');


console.log(name3[2]);
console.log(name3.length);
console.log(name3.charAt(2));
console.log(name3.indexOf('v'));
console.log(name3.toUpperCase());

const newString = name3.substring(2,5);//vas
console.log(newString);

const anotherString = name3.slice(2,5);
console.log(anotherString);

const str = "       deep      ";
console.log(str.trim());


const url = "https://google.com/deepanshu%20kumar"

console.log(url.replace('%20','-'));

const str2 = "deepanshu-kumar-string"
console.log(str2.split('-')); // converts into array


console.log(name3.substr(2,5));//vascr (start,length)






