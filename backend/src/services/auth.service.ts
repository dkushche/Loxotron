import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument } from 'src/models/user.model';
import { Model } from 'mongoose';
import { User } from 'src/models/user.model';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>,
    public jwtService: JwtService,
  ) {}

  async registration(user: User): Promise<Object> {
    const newUser = new this.userModel(user);
    newUser.password = await bcrypt.hash(user.password, 10);
    if (await this.userModel.findOne({ username: newUser.username })) {
      throw new BadRequestException('This username is already taken');
    }
    newUser.save();
    return {
      message: 'You are successfully registered',
    };
  }

  async login(user: User, res: Response) {
    const newUser = new this.userModel(user);
    const isUsernameCorrect = await this.userModel.findOne({
      username: newUser.username,
    });
    if (
      !isUsernameCorrect ||
      !(await bcrypt.compare(user.password, isUsernameCorrect.password))
    ) {
      throw new BadRequestException('Incorrect username or password');
    }
    const token = this.jwtService.sign({ _id: isUsernameCorrect._id });
    res.cookie('token', token, { httpOnly: true, secure: false });
    return {
      message: 'You signed in successfully',
    };
  }
}
