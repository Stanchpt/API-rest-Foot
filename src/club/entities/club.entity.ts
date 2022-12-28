import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Club {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string; //Nom du club Ex = Paris St-Germain

  @Column()
  Surnom: string; //Ex : France = Les Parisiens

  @Column()
  Pays: string; 

  @Column()
  Championnat: string; // == Competition

  @Column()
  Continent: string;

  @Column()
  logo_team:string;
}
