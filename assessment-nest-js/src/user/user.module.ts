import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';

// TASK 1 : Create Basic Module 

@Module({
  controllers: [UserController],
  // TASK 8 : (Add mongoose module for register the user schema)
  imports:[MongooseModule.forFeature([{name:User.name,schema:UserSchema}])]

})
export class UserModule {}
