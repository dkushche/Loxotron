import { Controller, Get } from "@nestjs/common";
import { SpinnerService } from "../services/spinner.service";

@Controller()
export class SpinnerController {
  constructor(private readonly spinnerService: SpinnerService) {}
  @Get("spin")
  spin() {
    return this.spinnerService.spin(0.3);
  }
}
