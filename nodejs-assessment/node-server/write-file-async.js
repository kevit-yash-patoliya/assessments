const fs = require("fs")
const fsPromise = require("fs/promises")
// Task 8 : Write file in async manner

fs.writeFile("writefile-fs.txt", "Node Js Assessment" , "utf-8",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Using fs module to write a file async manner")
    }
})

fsPromise.writeFile("writefile-fs-promise.txt", "Node Js Assessment" , "utf-8").then(()=>{
    console.log("Using fs/promise module to write a file async manner")
}).catch((err)=>{
    console.log(err)
})