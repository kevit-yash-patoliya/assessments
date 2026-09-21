import { Body, Controller, Get, HttpCode, Post, Param, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    
    constructor(private readonly userService: UserService) {}

    // TASK 2 : (Simple get route)
    // example call : http://localhost:3000/user
    @Get("/")
    greetingMessage(){
        return this.userService.greetingMessage();
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
    createUser(@Body() body: CreateUserDto){
        return this.userService.createUser(body);
    }

    // TASK 4 : (Simple GET by id )
    // example call : http://localhost:3000/user/1
    @Get(":id")
    getUserById(@Param("id") id: number){
        return this.userService.getUserById(id);
    }

     // TASK 5 : (Simple fetch data with query role parameter)
     // example call : http://localhost:3000/user/query/data?role=admin
    @Get("/query/data")
    getRoleByData(@Query("role") role: string){
        return this.userService.getRoleByData(role);
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
    async createUserWithDB(@Body() body: CreateUserDto){
        return this.userService.createUserWithDB(body);
    }

    // Task 10 : (Create route that fetch by id using mongodb)
    // example-call : http://localhost:3000/user/get-by-id/1
    @Get("get-by-id/:id")
    @HttpCode(200)
    async getById(@Param("id") id: number){
        return this.userService.getById(id);
    }
}
