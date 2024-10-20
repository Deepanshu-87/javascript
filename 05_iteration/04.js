const ipl=['delhi','mumbai','chennai','bangalore']

// ipl.forEach(function (team){
//     console.log(team)
// })

//using callback

// ipl.forEach((team)=>{
//     console.log(team)
// })

//passing reference and defining function outside

// function PrintTeam(team){
//     console.log(team)
// }

//ipl.forEach(PrintTeam) //refernce dena h call nhi krna

//printing bunch of things eg-> value,index and whole array 

ipl.forEach((item,index,arr)=>{
    console.log(item,index,arr) //in this callback function we have access to each value,its index and whole array also
})


//array of obj access

const myCoding = [
    {
        languageName:'javascript',
        extension:'js'
    },
    {
        languageName:'python',
        extension:'py'
    },
    {
        languageName:'java',
        extension:'java'
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName)
})