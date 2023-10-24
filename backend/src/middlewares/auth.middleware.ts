import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}
  use(req: Request, res: Response, next: NextFunction) {
    const cookie = req.headers.cookie;
    if (!cookie) {
      throw new UnauthorizedException('Please log in or sign in');
    }
    const token = cookie.slice(6);
    const isTokenValid = this.jwtService.verify(token);
    next();
  }
}
