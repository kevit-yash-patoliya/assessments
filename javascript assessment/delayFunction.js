function delayed(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            return resolve("Done!!! after 2 seconds")
        },2000)
    })
}

delayed().then((msg)=>{
    console.log(msg)
})