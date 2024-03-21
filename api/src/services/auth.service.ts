import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { UserDocument } from "src/models/user.model";
import { Model } from "mongoose";
import { User } from "src/models/user.model";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { Response } from "express";

@Injectable()
export class AuthService {
  constructor(
    @InjectModel("user") private userModel: Model<UserDocument>,
    public jwtService: JwtService,
  ) {}

  async registration(user: User): Promise<object> {
    const newUser = new this.userModel(user);

    if(user.username.length < 7 || user.password.length < 7) {
      throw new BadRequestException("Value too short")
    }

    if(user.username.length > 10 || user.password.length > 10) {
      throw new BadRequestException("Value too long")
    }

    newUser.password = await bcrypt.hash(user.password, 10);

    if (await this.userModel.findOne({ username: newUser.username })) {
      throw new BadRequestException("This username is already taken");
    }

    newUser.save();

    return {
      message: "You are successfully registered",
    };
  }

  async login(user: User, res: Response) {
    const newUser = new this.userModel(user);

    const isUsernameCorrect = await this.userModel.findOne({
      username: newUser.username,
    });

    if (!isUsernameCorrect ||
        !(await bcrypt.compare(user.password, isUsernameCorrect.password))) {
      throw new BadRequestException("Not authorized");
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
