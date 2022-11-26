import { IsNumber, IsString } from "class-validator";

export class CreateTeamDto {
    @IsString()
    nom: string;

    @IsString()
    surnom: string;
  
    @IsString()
    Pays: string;
  
    @IsString()
    Continent: string;

    @IsString()
    id_fifa : string;
}
