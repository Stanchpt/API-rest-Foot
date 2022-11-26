import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string; //Nom du club ou de l'equipe nationale Ex = Paris St-Germain ou Equipe de France 

  @Column()
  Surnom: string; //Ex : France = Les BLEUS

  @Column()
  Pays: string;

  @Column()
  Continent: string;

  @Column({length : 4})
  id_fifa: string; //Ex : France = FRA
}
