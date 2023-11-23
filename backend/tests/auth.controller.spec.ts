import { AuthController } from "../src/controllers/auth.controller";
import { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { AuthService } from "../src/services/auth.service";
import { getModelToken } from "@nestjs/mongoose";
import { JwtService } from "@nestjs/jwt";
import { User } from "../src/models/user.model";
import {BadRequestException} from "@nestjs/common"

const inputUser: User = {
  username: "qwerty",
  password: "123",
};

export class MockUserModel {
  static findOne = jest.fn();

  save = jest.fn();

  private user: User;

  constructor(user: User) {
    MockUserModel.findOne.mockResolvedValue(false);
    this.user = user;
  }
}

describe("AuthController", () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeAll( async () => {
    const appModule: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        JwtService,
          AuthService,
        {
          provide: getModelToken("user"),
          useValue: MockUserModel
        },
      ],
    }).compile();

    authController = appModule.get<AuthController>(AuthController);
    authService = appModule.get<AuthService>(AuthService);
  });

  it("Should be defined", () => {
    expect(AuthController).toBeDefined();
    expect(AuthService).toBeDefined();
  });

  it("Should return message of success: registration", async () => {
    expect(await authController.registartion(inputUser)).toEqual({ message: "You are successfully registered"});
  });

    it("Should throw an error: registration", async () => {
        jest
            .spyOn(authService, 'registration')
            .mockImplementationOnce(() => {
              throw new BadRequestException("This username is already taken");
            });
        try {
          const result = await authController.registartion(inputUser);
          expect(result).toThrow("This username is already taken")
        } catch (e) {
          console.log(e.name)
        }
    });

    it("Should throw an error: login", async () => {
      try {
        const result = await authController.signIn(inputUser);
        expect(result).toThrow("Incorrect username or password");
      } catch (e) {
        console.log(e.name)
      }
    });
});
