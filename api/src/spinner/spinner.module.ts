import { Module } from "@nestjs/common";
import { SpinnerService } from "./spinner.service";
import { SpinnerController } from "./spinner.controller";
import {JwtService} from "@nestjs/jwt";

@Module({
  imports: [],
  controllers: [SpinnerController],
  providers: [SpinnerService, JwtService],
})
export class SpinnerModule {}
