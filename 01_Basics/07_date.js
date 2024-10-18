const date = new Date();
// console.log(date.toDateString());
// console.log(date.toLocaleString());

const mydate = new Date(2024,0,15);
console.log(mydate.toDateString()); //mon jan 15 2024
console.log(mydate.toLocaleString());

console.log(new Date('01-09-2024').toDateString());



let myTimeStamp = Date.now(); //give no of milisecond of current date sine 1970 1st jan(change as time increases)
console.log(myTimeStamp); 
console.log(mydate.getTime()); //give no of milisecond of this date since 1970 1st jan(not change) 


console.log(Math.floor(Date.now()/1000));  //returns date in seconds since 1970 1st 

