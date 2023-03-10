import { IsEmail, IsIn, IsNotEmpty, IsOptional, IsString, Length } from "class-validator";

export class userDTO {
    @IsString()
    @Length(2, 20)
    username: string;

    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsIn(['admin', 'moderator', 'reader'])
    role: string;
 
    @IsOptional()
    @IsString()
    profileImage?: string;

    @IsOptional()
    pets?: number;
}