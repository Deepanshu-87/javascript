const myobj={
    js:"javascript",
    cpp:"competitive programming",
    rb:"ruby"
}

for (const key in myobj) {
//    console.log(key)
//   console.log(myobj[key])
// console.log(`${key} shortcut is for ${myobj[key]}`);
}




const myArr = [1,2,3,4,5]
for(const value in myArr)
     {
        // console.log(value) //array keys print
        console.log(myArr[value]) 
    }


    //the major diff between for of and for in is that for-of loop mein values print and for-in mein keys print in array


    //crux matter
    //array => for of
    //obj => for in
    //map => for of[key,value]