let score = "33abc";
console.log(typeof score); //string
let valueInNumber = Number(score); 
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //NaN(not a number)

//console.log(typeof NaN); //number 
//console.log(typeof null); //object
//console.log(typeof undefined); //undefined


//undefined => NaN
//null => 0
// "33" => 33
// "33abc" => NaN
// true => 1, false=> 0

let ans = 1
let ansInNumber = Boolean(ans);
console.log(ansInNumber);
console.log(typeof ansInNumber);

 //1 => true, 0 => false
 // "" => false, "deepanshu"=> true




 // operations

 console.log("1"+2); //12
 console.log(1+"2"); //12
 console.log("1"+2+2);//122
 console.log(1+2+"2");//32
 

 // + means conversion but + only works(or converts) at first not at last(error ocuured at last if + at last use)
 console.log(+true); //1
 console.log(+""); //0
 
 //let x = 3;
 //let y = x++;

 //console.log([x,y]); //4,3


 let x = 3;
 let y = ++x;
console.log([x,y]);//4,4

 
 