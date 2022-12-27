import { isDate, IsNumber, IsString } from 'class-validator';

export class CreateCompetitionDto {
  @IsString()
  nom: string;

  @IsNumber()
  Annee: number;

  @IsNumber()
  nb_equipe: number;

  @IsString()
  region: string;

  @IsString()
  url_info : string; 

  @IsString()
  url_image: string;
}