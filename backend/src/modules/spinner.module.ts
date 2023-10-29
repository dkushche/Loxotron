import { Module } from "@nestjs/common";
import { SpinnerService } from "../services/spinner.service";
import { SpinnerController } from "../controllers/spinner.controller";

@Module({
  imports: [],
  controllers: [SpinnerController],
  providers: [SpinnerService],
})
export class SpinnerModule {}
