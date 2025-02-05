import {Controller, Get } from "@nestjs/common";
import { SpinnerService } from "./spinner.service";
import { ApiTags } from '@nestjs/swagger';
import {ConfigService} from "@nestjs/config";

@ApiTags('Game')
@Controller()
export class SpinnerController {
  constructor(
      private readonly spinnerService: SpinnerService,
      private configService: ConfigService,
  ) {}
  @Get("spin")
  spin() {
    return this.spinnerService.spin(parseFloat(this.configService.get<string>('WIN_RATE')));
  }
}
