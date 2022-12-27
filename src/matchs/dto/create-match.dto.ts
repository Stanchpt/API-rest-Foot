import {IsDate, IsString } from "class-validator";

export class CreateMatchDto {
    @IsString()
    Adv1: string;

    @IsString()
    Adv2: string;
  
    @IsString()
    competition: string;
  
    @IsDate()
    Date: Date;

    @IsString()
    img_match : string;
}

