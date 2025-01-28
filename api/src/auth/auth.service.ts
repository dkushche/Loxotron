import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { UserDocument } from "src/auth/models/user.model";
import { Model } from "mongoose";
import { User } from "src/auth/models/user.model";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { Response } from "express";
import {CreateUserDto} from "./dto/createUser.dto";
import {hash, verify} from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel("user") private userModel: Model<UserDocument>,
    public jwtService: JwtService,
  ) {}

  async registration(createUserDto: CreateUserDto): Promise<object> {
    const user = new this.userModel(createUserDto);

    const isUserExists = await this.isUserExists(user.username);

    if (isUserExists) {
        throw new BadRequestException("This username is already taken");
    }

    user.password = await hash(user.password);

    await user.save();

    return {
      message: "You are successfully registered",
    };
  }

  isUserExists(username: string) {
      return this.userModel.findOne({ username });
  }

  async login(signInDto: CreateUserDto, res: Response) {
    const user = await new this.userModel(signInDto);

    const isUsernameCorrect = await this.isUserExists(user.username);
    if (!isUsernameCorrect) {
        throw new BadRequestException('Invalida username');
    }
    const comparePasswords = await verify(isUsernameCorrect.password, user.password);

    if (!comparePasswords) {
      throw new BadRequestException("Invalid password");
    }

    const token = this.jwtService.sign({ _id: isUsernameCorrect._id });

    res.cookie(
      "token", token, {
        httpOnly: true,
        secure: false,
        domain: "loxotron.com",
        sameSite: "lax"
      });

    return {
      message: "You signed in successfully",
    };
  }
}
