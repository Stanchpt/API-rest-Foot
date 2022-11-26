import { IsNumber, IsString } from 'class-validator';
export class CreatePlayerDto {
    @IsString()
    nom: string;
  
    @IsString()
    prenom: string;
  
    @IsNumber()
    age: number;
  
    @IsString()
    nationality: string;

    @IsString()
    equipe: string;
}
