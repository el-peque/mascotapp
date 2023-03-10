import { IsIn, IsMimeType, IsOptional, IsString, Length } from "class-validator";

export class postDTO {
    @IsString()
    @Length(1, 100)
    title: string;

    @IsString()
    @Length(5, 250)
    body: string;

    @IsIn(['General', 'Off topic', 'Cats', 'Dogs'])
    category: string;

    @IsOptional()
    @IsString()
    // @IsMimeType()
    image?: string;
}