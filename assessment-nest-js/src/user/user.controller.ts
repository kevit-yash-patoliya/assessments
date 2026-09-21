import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Controller('user')
export class UserController {
    
    // Part of Task 9 inject Model into controller
    constructor(@InjectModel(User.name) private user:Model<UserDocument>){}

    // TASK 2 : (Simple get route)
    // example call : http://localhost:3000/user
    @Get("/")
    greetingMessage(){
        return "Welcome to the user API"
    }

    // TASK 3 : (Simple Post route with dto )
    // example call : http://localhost:3000/user/create 
    // Body: 
    // {
    //     "id":1,
    //     "name":"Yash",
    //     "email":"[EMAIL_ADDRESS]",
    //     "password":"password"
    // }
    @Post("create")
    createUser(@Body() body:CreateUserDto){
        return body
    }

    // TASK 4 : (Simple GET by id )
    // example call : http://localhost:3000/user/1
    @Get(":id")
    getUserById(@Param("id") id:number){
        const tempData = [{
            id:1,
            name:"Yash",
            email:"yash@gmail.com",
            password:"password"
        },{
            id:2,
            name:"Dhyey",
            email:"dhyey@gmail.com",
            password:"password"
        }]
        const user = tempData.find((item)=>item.id == id)
        if(user){
            return user
        }
        throw new HttpException("User not found",HttpStatus.NOT_FOUND)
    }

     // TASK 5 : (Simple fetch data with query role parameter)

     // example call : http://localhost:3000/user/query/data?role=admin
    @Get("/query/data")
    getRoleByData(@Query("role") role:string){
        const tempData = [{
            id:1,
            name:"Yash",
            email:"yash@gmail.com",
            role:"user",
            password:"password"
        },{
            id:2,
            name:"Dhyey",
            email:"dhyey@gmail.com",
            role:"admin",
            password:"password"
        },{
            id:3,
            name:"Rachit",
            email:"rachit@gmail.com",
            role:"user",
            password:"password"
        }]
        const user = tempData.filter((item)=>item.role == role)
        if(user){
            return user
        }
        throw new HttpException("Unauthorized",HttpStatus.FORBIDDEN)
    }



    // Task 9 : (Create route that insert data into mongodb )
    // example call : http://localhost:3000/user/create-with-db
    // Body: 
    // {
    //     "id":1,
    //     "name":"Yash",
    //     "email":"yash@gmail.com",
    //     "password":"password"
    // }
    @Post("create-with-db")
    async createUserWithDB(@Body() body:CreateUserDto){

        // First checking if the user is already exists or not
        const user = await this.user.findOne({id:body.id})
        
        if(user){
            throw new HttpException("User already exists",HttpStatus.BAD_REQUEST)
        }

        const createUser = await this.user.create(body)

        return {
            message:"User Created Successfully",
            status:201,
            data:createUser
        }
    }

    // Task 10 : (Create route that fetch by id using mongodb)
    // example-call : http://localhost:3000/user/get-by-id/1
    @Get("get-by-id/:id")
    @HttpCode(200)
    async getById(@Param("id") id:number){
        const user = await this.user.findOne({id:id})

        if(user){

            return {
                message:"User Found Successfully",
                status:200,
                data:user
            }
        }
        throw new HttpException("User not found",HttpStatus.NOT_FOUND)
    }
}
