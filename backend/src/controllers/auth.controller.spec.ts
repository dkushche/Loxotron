import { AuthController } from "./auth.controller";
import { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { AuthService } from "../services/auth.service";
import { getModelToken } from "@nestjs/mongoose";
import { JwtService } from "@nestjs/jwt";
import { User, UserDocument } from "../models/user.model";
import { Model } from "mongoose";
import mocked = jest.mocked;

describe("AuthController", () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const appModule: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        JwtService,
        {
          provide: getModelToken("user"),
          useValue: jest.mocked<Model<UserDocument>>,
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

  it("Should return message of success", async () => {
    const inputUser: User = {
      username: "qwertyuioplkjhgfdsa",
      password: "1234567890",
    };
    expect(await authController.createUser(inputUser)).toEqual({ message: "You are successfully registered" });
  });
});
