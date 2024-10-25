function getData(dataId,getDataNext){
    setTimeout(()=>{
        console.log('data',dataId)
        if(getDataNext)
        {
            getDataNext()
        }
    },2000)
}

//getDataNext => ()=>{}

getData(1,()=>{
    getData(2,()=>{
        getData(3)
    })
})
// getData(1,getData(2,getData(3)))
// getData(2)
// getData(3)

// function complete(){
//     console.log('data is fetched successfully')
// }
// setTimeout(complete,2000)