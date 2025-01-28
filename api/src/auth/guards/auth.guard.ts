import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}

    canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
        const cookie = request.headers['cookie'];
        if (!cookie) {
            throw new UnauthorizedException("Please log in");
        }

        try {
            const token = cookie.slice(6);
            const decodedToken = this.jwtService.verify(token);
            console.log(decodedToken);
            return true;
        } catch (e) {
            throw new UnauthorizedException(`Inalid token: ${e}`);
        }
    }
}
