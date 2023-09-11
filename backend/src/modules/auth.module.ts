import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/models/user.model';
import {ConfigModule} from "@nestjs/config";
import { AuthController } from 'src/controllers/auth.controller';
import { AuthService } from 'src/services/auth.service';
import { JwtModule } from '@nestjs/jwt';


@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forFeature([{name: 'user', schema: UserSchema}]),
        JwtModule.register({
            secret:process.env.jwt_secret,
            signOptions:{ expiresIn:'1d' }
        }),

    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}

