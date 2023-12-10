import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./auth.module";
import { SpinnerModule } from "./spinner.module";
import { AuthMiddleware } from "../middlewares/auth.middleware";

@Module({
  imports: [
    ConfigModule.forRoot(),
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
        { path: "register", method: RequestMethod.POST },
        { path: "login", method: RequestMethod.POST }
      )
      .forRoutes({ path: "*", method: RequestMethod.ALL });
  }
}
