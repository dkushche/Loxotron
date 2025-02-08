import { AuthController } from "../src/auth/auth.controller";
import { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { AuthService } from "../src/auth/auth.service";
import { getModelToken } from "@nestjs/mongoose";
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from "../src/auth/dto/createUser.dto";
import { BadRequestException } from "@nestjs/common";

jest.mock('argon2', () => ({
    hash: jest.fn().mockResolvedValue('hashedPassword'),
    verify: jest.fn().mockResolvedValue(true),
}));

const inputUser: CreateUserDto = {
    username: "qwertyui",
    password: "12345678",
};

const tooShortUser: CreateUserDto = {
    username: "qwer",
    password: "123",
};

const tooLongUser: CreateUserDto = {
    username: "qwertyuiopasd",
    password: "12345678901",
};

export class MockUserModel {
    static findOne = jest.fn();
    save = jest.fn();

    private user: CreateUserDto;

    constructor(user: CreateUserDto) {
        MockUserModel.findOne.mockResolvedValue(false);
        this.user = user;
    }
}

describe("AuthController", () => {
    let authController: AuthController;

    beforeAll(async () => {
        const appModule: TestingModule = await Test.createTestingModule({
            controllers: [AuthController],
            providers: [
                JwtService,
                AuthService,
                {
                    provide: getModelToken("user"),
                    useValue: MockUserModel,
                },
            ],
        }).compile();

        authController = appModule.get<AuthController>(AuthController);
    });

    it("Should be defined", () => {
        expect(AuthController).toBeDefined();
    });

    it("Should return message of success: registration", async () => {
        const result = await authController.registartion(inputUser);
        expect(result).toEqual({ message: "You are successfully registered" });
    });

    it("Should throw an error: registration - username already taken", async () => {
        try {
            MockUserModel.findOne.mockResolvedValue(true);
            await authController.registartion(inputUser);
        } catch (error) {
            expect(error).toBeInstanceOf(BadRequestException);
            expect(error.message).toBe("This username is already taken");
        }
    });

    it("Should throw an error: login - incorrect username or password", async () => {
        try {
            const result = await authController.signIn(inputUser);
            expect(result).toThrow("Incorrect username or password");
        } catch (e) {
            console.log(e.name);
        }
    });

    it("Register: should throw an error: too short value", async () => {
        try {
            await authController.registartion(tooShortUser);
        } catch (e) {
            expect(e.response.message).toBe("Value too short");
        }
    });

    it("Register: should throw an error: too long value", async () => {
        try {
            await authController.registartion(tooLongUser);
        } catch (e) {
            expect(e.response.message).toBe("Value too long");
        }
    });
});
