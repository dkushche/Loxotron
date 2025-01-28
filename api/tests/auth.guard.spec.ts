import { AuthGuard } from "../src/auth/guards/auth.guard";
import { JwtService } from "@nestjs/jwt";
import { UnauthorizedException } from "@nestjs/common";
import { ExecutionContext } from "@nestjs/common";

describe("AuthGuard", () => {
    let authGuard: AuthGuard;
    let mockJwtService: JwtService;

    beforeEach(() => {
        mockJwtService = {
            verify: jest.fn(),
        } as any;
        authGuard = new AuthGuard(mockJwtService);
    });

    it('should throw UnauthorizedException if no cookie is present', () => {
        const mockExecutionContext = {
            switchToHttp: jest.fn().mockReturnValue({
                getRequest: jest.fn().mockReturnValue({ headers: {} }),
            }),
        } as unknown as ExecutionContext;

        try {
            authGuard.canActivate(mockExecutionContext);
        } catch (error) {
            expect(error).toBeInstanceOf(UnauthorizedException);
            expect(error.message).toBe("Please log in");
        }
    });

    it('should return true if token is valid', () => {
        const mockExecutionContext = {
            switchToHttp: jest.fn().mockReturnValue({
                getRequest: jest.fn().mockReturnValue({
                    headers: { cookie: 'token=valid.token.string' },
                }),
            }),
        } as unknown as ExecutionContext;

        (mockJwtService.verify as jest.Mock).mockReturnValue({
            "_id": "655e5da629a155b7933effa0",
            "iat": 1700683190,
            "exp": 1700769590,
        });

        const result = authGuard.canActivate(mockExecutionContext);

        expect(result).toBe(true);
        expect(mockJwtService.verify).toHaveBeenCalledWith('valid.token.string');
    });

    it('should throw UnauthorizedException if token verification fails', () => {
        const mockExecutionContext = {
            switchToHttp: jest.fn().mockReturnValue({
                getRequest: jest.fn().mockReturnValue({
                    headers: { cookie: 'token=invalid.token' },
                }),
            }),
        } as unknown as ExecutionContext;

        (mockJwtService.verify as jest.Mock).mockImplementation(() => {
            throw new Error('Invalid token');
        });

        try {
            authGuard.canActivate(mockExecutionContext);
        } catch (error) {
            expect(error).toBeInstanceOf(UnauthorizedException);
            expect(error.message).toBe('Inalid token: Error: Invalid token');
        }
    });
});
