import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private authService: AuthService) {}
  use(req: Request, res: Response, next: NextFunction) {
    try {
      const cookie = req.headers.cookie;
      if (!cookie) {
        throw new UnauthorizedException('Please log in or sign in');
      }
      const token = cookie.slice(6);
      const decodedToken = this.authService.jwtService.verify(token);
      next();
    } catch (e) {
      res.status(401).send('Invalid token');
    }
  }
}
