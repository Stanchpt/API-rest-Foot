import { IsNumber, IsString } from "class-validator";

export class CreateEquipeNationaleDto {
    @IsString()
    nom: string;

    @IsString()
    surnom: string;
    
    @IsString()
    Continent: string;

    @IsString()
    id_fifa : string;

    @IsString()
    logo_team : string;
}
