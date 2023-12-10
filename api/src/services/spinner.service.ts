import { Injectable } from "@nestjs/common";

@Injectable()
export class SpinnerService {
  spin(chance: number) {
    const winValues: number[] = [
      0,
      11111, 22222, 33333,
      44444, 55555, 66666,
      77777, 88888, 99999,
    ]

    let spinResult: number;

    if(Math.random() > 1 - chance) {
        spinResult = winValues[Math.floor(Math.random() * 10)];
    } else {
        do {
          spinResult = Math.floor(Math.random() * 99999);
        } while(winValues.includes(spinResult));
    }

    return {
      "spinResult": spinResult
    }
  }
}
