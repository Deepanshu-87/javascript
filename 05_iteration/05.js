const coding = ['js','py','html','cpp']

const value = coding.forEach((item)=>{
    //console.log(item)
    return item
})

// console.log(value); //for-each doesn't retrun anything (undefined)


// const num = [1,2,3,4,5,6,7,8,9,10]
// const ans = num.filter((value)=>{
//     return value>4         //filter mein always condition
// })
// console.log(ans)


//or
const num = [1,2,3,4,5,6,7,8,9,10]
//const ans = num.filter((value)=>value>4)
// console.log(ans) //[ 5, 6, 7, 8, 9, 10 ]



//explicitly by-using for each 

const newNum=[]
num.forEach((item=>{
    if(item>4)
    {
        newNum.push(item)
    }
}))

// console.log(newNum)



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  const UserBooks = books.filter((historyBook)=>historyBook.genre==='History')
//   console.log(UserBooks) //array return

//   historyBook is object basically

//   const BookPublishedAfter2000 = books.filter((pub)=>pub.publish>=1995)
//    console.log(BookPublishedAfter2000)

const BookPublishedAfter2000 = books.filter((pub)=>pub.publish>=1995&&pub.genre==='History')
console.log(BookPublishedAfter2000)
