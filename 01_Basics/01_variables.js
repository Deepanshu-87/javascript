const accountId=123;
var accountEmail="deepanshu@google.com"
let accountPassword="12345"
accountCity="delhi"
let accountState; //undefined

/*
prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
