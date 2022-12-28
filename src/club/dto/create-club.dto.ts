import { IsNumber, IsString } from "class-validator";

export class CreateClubDto {
    @IsString()
    nom: string;

    @IsString()
    surnom: string;
    
    @IsString()
    Continent: string;

    @IsString()
    logo_team : string;
}
