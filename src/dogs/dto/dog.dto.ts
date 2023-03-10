import { IsNumber, IsString, Length, Min, MinLength } from "class-validator";

export class dogDTO {
    @IsString()
    @MinLength(2)
    name: string;

    @IsNumber()
    @Min(0)
    age: number;

    @IsString()
    @Length(2, 20)
    owner: string;

    @IsString()
    @Length(2, 20)
    color: string;
}