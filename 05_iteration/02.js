// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// const names = ["deepanshu","hitesh","virat","rohit"]

// for (const i of names) {
//     console.log(i)
// }


// const str = "hello world"
// for (const word of str) {
//     if(word==' ')
//     {
//         console.log('space detected');
//         break
        
//     }
//     console.log(`Each character is ${word}`)
    
// }



const map = new Map() //duplicate keys not allowed
map.set('IN','India')
map.set('USA','United States Of America')
map.set('Fr','France')


// console.log(map);

// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States Of America',
//     'Fr' => 'France'
//   }

for (const [key,value] of map) {
   // console.log(key)
   // console.log(value)
   //console.log(key," - ",value)
}



//maps are iteratable (for of work)  but objects pr nhi(for of work)

const myobj = {
    username:"deepanshu",
    age:40
}

for (const [key,value] of myobj) { //not - iteratable
    console.log(key," - ",value)
}