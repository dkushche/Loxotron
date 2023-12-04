import { Injectable } from "@nestjs/common";

@Injectable()
export class SpinnerService {
  spin(chance: number) {
    let random = Math.random();
    if(random > 1 - chance) {
        random = Math.floor(Math.random() * 10);
        random = random * 11111;
        return random;
    } else {
        let randomNumber: number = Math.floor(Math.random() * 99999);
        const excludedValues: number[] = [11111, 22222, 33333, 44444, 55555, 66666, 77777, 88888, 99999, 0]
        
        while(excludedValues.includes(randomNumber)) {
          randomNumber = Math.floor(Math.random() * 99999);
        }
        return randomNumber;
    }
  }
}
