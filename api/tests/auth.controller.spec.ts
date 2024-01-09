import { AuthController } from "../src/controllers/auth.controller";
import { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { AuthService } from "../src/services/auth.service";
import { getModelToken } from "@nestjs/mongoose";
import { JwtService } from "@nestjs/jwt";
import { User } from "../src/models/user.model";

const inputUser: User = {
  username: "qwertyui",
  password: "12345678",
};

const tooShortUser: User = {
  username: "qwer",
  password: "123"
};

const tooLongUser: User = {
  username: "qwertyuiopasd",
  password: "12345678901"
}

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
  });

  it("Should be defined", () => {
    expect(AuthController).toBeDefined();
  });

  it("Should return message of success: registration", async () => {
    expect(await authController.registartion(inputUser)).toEqual({ message: "You are successfully registered"});
  });

  it("Should throw an error: registration", async () => {
    try {
      MockUserModel.findOne.mockResolvedValue(true);

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

  it("Register: should throw an error: too short value", async () => {
    try {
      const result = await authController.registartion(tooShortUser);
      expect(result).toThrow("Value too short");
    } catch (e) {
      console.log(e.name)
    }
  });

  it("Register: should throw an error: too long value", async () => {
    try {
      const result = await authController.registartion(tooLongUser);
      expect(result).toThrow("Value too long");
    } catch (e) {
      console.log(e.name)
    }
  });
});
