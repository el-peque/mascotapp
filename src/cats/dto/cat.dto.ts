import { IsNumber, IsOptional, IsString, Length, Min, MinLength } from "class-validator";

export class catDTO {
    @IsString()
    @MinLength(2)
    name: string;

    @IsNumber()
    @Min(0)
    age: number;

    @IsString()
    @Length(2, 20)
    owner: string;

    @IsOptional()
    @IsString()
    @Length(2, 20)
    color: string;
}