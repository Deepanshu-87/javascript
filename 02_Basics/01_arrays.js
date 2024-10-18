//js- array copy operations always use shallow copy(share same reference) rather then deep copy  

const myArr = [1,2,3,4,5];

// myArr.push(10);
// myArr.pop();
// myArr.unshift(10)
// myArr.shift()


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(8));
// console.log(myArr.join());

// console.log(typeof myArr.join()) //string

const n1 = myArr.slice(1,4) 

 console.log(myArr);//[1,2,3,4,5]
 console.log("Slice-Array",n1); //[2,3,4]
 console.log(myArr);//[1,2,3,4,5]



const n2 = myArr.splice(1,4); 
console.log(myArr)//[1]
console.log("Splice-Array",n2);//[2,3,4,5]

//splice make changes into main array and slice not make change in the main array, it pulls a sub-array from the main array