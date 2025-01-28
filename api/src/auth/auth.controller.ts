import { Controller, Post, Body, Res, HttpCode, Get, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Response } from "express";
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import {CreateUserDto} from "./dto/createUser.dto";

@ApiTags('Auth')
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("register")
  @ApiResponse({ status: 200, description: 'You are successfully registered'})
  @ApiResponse({ status: 400, description: 'This username is already taken'})
  @HttpCode(201)
  async registartion(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto);
  }

  @Post("login")
  @ApiResponse({ status: 200, description: 'You signed in successfully'})
  @ApiResponse({ status: 400, description: 'Incorrect username or password.'})
  @HttpCode(200)
  async signIn(@Body() userDto: CreateUserDto, @Res({ passthrough: true }) res?: Response) {
    return this.authService.login(userDto, res);
  }

  @Get("login")
  @HttpCode(200)
  async checkToken(@Req() request) {
    const token = request.cookies['token']; // eslint-disable-line
  }
}
