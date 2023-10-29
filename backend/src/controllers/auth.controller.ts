import { Controller, Post, Body, Get, Res, HttpCode } from "@nestjs/common";
import { AuthService } from "../services/auth.service";
import { User } from "src/models/user.model";
import { JwtService } from "@nestjs/jwt";
import { Response } from "express";

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private jwtService: JwtService,
  ) {}

  @Post("register")
  @HttpCode(201)
  async createUser(@Body() userDto: User) {
    return this.authService.registration(userDto);
  }

  @Get("login")
  @HttpCode(200)
  async signIn(@Body() userDto: User, @Res({ passthrough: true }) res: Response) {
    return this.authService.login(userDto, res);
  }
}
