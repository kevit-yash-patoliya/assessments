import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateUserDto {
    
    @IsNotEmpty()
    @IsNumber()
    id:number
    
    @IsString()
    @IsNotEmpty()
    name:string
    
    @IsString()
    @IsNotEmpty()
    email:string
    
    @IsString()
    @IsNotEmpty()
    password:string
}