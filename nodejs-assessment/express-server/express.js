import express from 'express'
import customMiddleware from './custom-middleware.js'


const app = express()

const port = 4000

app.use(express.json())

// Task 9 : Customer middleware
app.use(customMiddleware);


// TASK 4 : Create simple express app with welcome message
app.get('/', (req, res)=>{
    res.send('Welcome !')
})

// Task 5 : GET /users for dummy users name
app.get('/users', (req, res)=>{
    res.status(200).json({
        status:"success",
        data:[
            {
                id:1,name:"Yash"
            },
            {
                id:2,name:"Prit"
            },
            {
                id:3,name:"Pruthviraj"
            },
            {
                id:4,name:"Raj"
            },
            {
                id:5,name:"Meet"
            }
        ]
    })
})

// Task 6 : GET /users/:id params
app.get('/users/:id', (req, res)=>{
    const id = req.params.id
    res.status(200).json({
        status:"success",
        data:{
            id:id
        }
    })
})

// Task 7 : Post /users received json data 
app.post('/users', (req, res)=>{
    const data = req.body
    res.status(201).json({
        status:"success",
        received_data:data
    })
})

// Task 10 : For undefined routes

app.use((req,res)=>{
    res.status(404).json({
        status:"failed",
        message:"This route is not defined"
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})