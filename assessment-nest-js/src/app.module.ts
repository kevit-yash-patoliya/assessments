import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  
  // TASK 6 : (Add mongoose module to connect to the database)
  
  imports: [UserModule,MongooseModule.forRootAsync({
      imports:[
        ConfigModule
      ],
      useFactory:async()=>({
        uri:process.env.MONGO_URI || "mongodb://localhost:27017/demo"
      })

    })
  ],
  controllers: [AppController],
  providers: [AppService,
    
  ],
})
export class AppModule {}
