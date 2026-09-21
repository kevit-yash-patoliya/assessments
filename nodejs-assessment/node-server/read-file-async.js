const fs = require("fs")
const fsPromise = require("fs/promises")

// TASK 2 : Read a file using fs module asynchronously
fs.readFile("readFile.txt","utf-8",(err, data)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Using fs module to read a file async manner")
        console.log(data)
    }
})



fsPromise.readFile("readFile.txt", "utf-8").then((data)=>{
    console.log("Using fs/promise module to read a file async manner")
    console.log(data)
}).catch((err)=>{
    console.log(err)
})


async function readFile(){
    try{

        const data = await fsPromise.readFile("readFile.txt", "utf-8")
            console.log("Using fs/promise module to read a file async manner modern programming")
            console.log(data)
        }catch(err){
            console.log(err);
        }
}

readFile()