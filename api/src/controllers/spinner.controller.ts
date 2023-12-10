import { Controller, Get } from "@nestjs/common";
import { SpinnerService } from "../services/spinner.service";
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Game')
@Controller()
export class SpinnerController {
  constructor(private readonly spinnerService: SpinnerService) {}
  @Get("spin")
  spin() {
    return this.spinnerService.spin(parseFloat(process.env.WIN_RATE));
  }
}
