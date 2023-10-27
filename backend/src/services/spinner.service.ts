import { Injectable } from '@nestjs/common';

@Injectable()
export class SpinnerService {
    spin() {
        return {
            "message": "Looser"
        }
    }
}
