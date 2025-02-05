import {MiddlewareConsumer, Module, NestModule, RequestMethod} from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./auth/auth.module";
import { SpinnerModule } from "./spinner/spinner.module";
import * as Joi from "joi";
import {AuthMiddleware} from "./auth/middlewares/auth.middleware";

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
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthMiddleware)
            .exclude(
                { path: 'register', method: RequestMethod.POST },
                { path: 'login', method: RequestMethod.POST },
            ).forRoutes({ path: '*', method: RequestMethod.ALL });

    }
}
