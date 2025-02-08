import {IsString, IsNotEmpty, Length} from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @Length(5, 12, { message: 'Username must be 5-12 chars' })
    username: string;

    @IsString()
    @IsNotEmpty()
    @Length(5, 12, { message: 'Password must be 5-12 chars' })
    password: string;
}
