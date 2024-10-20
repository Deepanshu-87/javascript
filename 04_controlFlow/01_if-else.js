// const loggedIn = true
// const debitCard = true
// const loggedInFromEmail = false
// const loggedInFromGoogle = false
// const guestUser=true
// if(loggedIn&&debitCard)
//      {
//         console.log('user allow to do shopping')
//      }
// if(loggedInFromEmail||loggedInFromGoogle||guestUser)
//     {
//         console.log('user has logged in')
//     }    


    

//switch

const month =3
switch (month) {
    case 1:
        console.log('jan')
        break;
    case 2:
        console.log('feb')
        break;
    case 3:
        console.log('mar')
        break;
    case 4:
        console.log('april')
        break;
    
    default:
        console.log('please enter a month')
}







// const month ="jan"
// switch (month) {
//     case "jan":
//         console.log(1)
//         break;
//     case "feb":
//         console.log(2)
//         break;
//     case "mar":
//         console.log(3)
//         break;
//     case "april":
//         console.log(4)
//         break;
    
//     default:
//         console.log('please enter a month')
// }




//falsy value
//false , 0, -0 , BigInt=>0n, "" , null , undefined , NaN 

//truthy value
// "0" , false , [] , {} , function(){} , " "



// const userName = []
// const email = "deep@google.com"

// if(userName.length===0)
//      {
//         console.log('array is empty')
//      }
// else
//  console.log('array is not empty')     

 
const obj = {}
const email = "deep@google.com"

if(Object.keys(obj).length===0)
     {
        console.log('Object is empty')
     }
else
 console.log('Object is not empty')     



 //false=='' //true
 //false==0  //true
 //0==''     //true



 //nullish coalescing operator(??) : null,undefined

 val1 = 10??5
 console.log(val1);//10
 val2 = null??5
 console.log(val2);//5
 val3=undefined??10
 console.log(val3)//10
 val4 = undefined??null??10??4??6
 console.log(val4) //10(first true value)

 const temp  =100;
 temp>=90?console.log('temp greater then 90 '): console.log('temp less then 90')
