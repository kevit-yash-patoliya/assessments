import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    greetingMessage() {
        return "Welcome to the user API";
    }

    createUser(body: CreateUserDto) {
        return body;
    }

    getUserById(id: number) {
        const tempData = [{
            id: 1,
            name: "Yash",
            email: "yash@gmail.com",
            password: "password"
        }, {
            id: 2,
            name: "Dhyey",
            email: "dhyey@gmail.com",
            password: "password"
        }];
        const user = tempData.find((item) => item.id == id);
        if (user) {
            return user;
        }
        throw new NotFoundException("User not found");
    }

    getRoleByData(role: string) {
        const tempData = [{
            id: 1,
            name: "Yash",
            email: "yash@gmail.com",
            role: "user",
            password: "password"
        }, {
            id: 2,
            name: "Dhyey",
            email: "dhyey@gmail.com",
            role: "admin",
            password: "password"
        }, {
            id: 3,
            name: "Rachit",
            email: "rachit@gmail.com",
            role: "user",
            password: "password"
        }];
        const user = tempData.filter((item) => item.role == role);
        if (user && user.length > 0) {
            return user;
        }
        throw new ForbiddenException("Unauthorized");
    }

    async createUserWithDB(body: CreateUserDto) {
        const user = await this.userModel.findOne({ id: body.id });

        if (user) {
            throw new BadRequestException("User already exists");
        }

        const createdUser = await this.userModel.create(body);

        return {
            message: "User Created Successfully",
            status: 201,
            data: createdUser
        };
    }

    async getById(id: number) {
        const user = await this.userModel.findOne({ id: id });

        if (user) {
            return {
                message: "User Found Successfully",
                status: 200,
                data: user
            };
        }
        throw new NotFoundException("User not found");
    }
}
