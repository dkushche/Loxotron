import { Module } from "@nestjs/common";
import { SpinnerService } from "./spinner.service";
import { SpinnerController } from "./spinner.controller";

@Module({
  imports: [],
  controllers: [SpinnerController],
  providers: [SpinnerService],
})
export class SpinnerModule {}
