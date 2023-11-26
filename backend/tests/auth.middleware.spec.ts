import {AuthMiddleware} from "../src/middlewares/auth.middleware";
import {AuthService} from "../src/services/auth.service";

describe("AuthMiddleware", () => {
    let authMiddleware: AuthMiddleware;
    let mockAuthService: AuthService;

    beforeEach(() => {
        mockAuthService = {
            jwtService: {
                verify: jest.fn(),
            } as any,
        } as unknown as AuthService;
        authMiddleware = new AuthMiddleware(mockAuthService);
    });

    it('should throw UnauthorizedException if no cookie is present', () => {
        const mockReq = {} as any;
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        } as any;
        const mockNext = jest.fn();

        authMiddleware.use(mockReq, mockRes, mockNext);

        expect(mockRes.status).toHaveBeenCalledWith(401);
        expect(mockRes.send).toHaveBeenCalledWith("Invalid token");
        expect(mockNext).not.toHaveBeenCalled();
    });

     it('Should call next() if token is valid', () => {
         const mockReq = {
             headers: {
                 cookie: 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTVlNWRhNjI5YTE1NWI3OTMzZWZmYTAiLCJpYXQiOjE3MDA2ODMxOTAsImV4cCI6MTcwMDc2OTU5MH0.cgYylDI4NsJFObDbT_idAPq6k8Z-KUDm2iesmj9RMEg'
             },
         } as any;
         const mockRes = {
             status: jest.fn().mockReturnThis(),
             send: jest.fn(),
         } as any;
         const mockNext = jest.fn();

         (mockAuthService.jwtService.verify as jest.Mock).mockReturnValue({
             "_id": "655e5da629a155b7933effa0",
             "iat": 1700683190,
             "exp": 1700769590
         })

         authMiddleware.use(mockReq, mockRes, mockNext)

         expect(mockRes.status).not.toHaveBeenCalled();
         expect(mockRes.send).not.toHaveBeenCalled();
         expect(mockNext).toHaveBeenCalled();
     });

    it('should send "Invalid token" if token verification fails', () => {
        const mockReq = {
            headers: {
                cookie: 'token=invalidtoken',
            },
        } as any;
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        } as any;
        const mockNext = jest.fn();

        (mockAuthService.jwtService.verify as jest.Mock).mockImplementation(() => {
            throw new Error('Invalid token');
        })

        authMiddleware.use(mockReq, mockRes, mockNext);

        expect(mockRes.status).toHaveBeenCalledWith(401);
        expect(mockRes.send).toHaveBeenCalledWith('Invalid token');
        expect(mockNext).not.toHaveBeenCalled();
    })
})
