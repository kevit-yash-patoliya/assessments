// TASK 1 : Create a simple Server 


const http = require("http")
const PORT = 3000
const server = http.createServer((req, res)=>{
    res.end("Hello World !")
})

server.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`Server is running on port ${PORT}`)
    }
})