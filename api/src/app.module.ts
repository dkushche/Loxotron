import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./auth/auth.module";
import { SpinnerModule } from "./spinner/spinner.module";
import * as Joi from "joi";

@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal: true,
        validationSchema: Joi.object({
            JWT_SECRET: Joi.string().required(),
            DB_TYPE: Joi.string().required(),
            PORT: Joi.number().required(),
            WIN_RATE: Joi.number().required(),
        })
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    AuthModule, SpinnerModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {}
