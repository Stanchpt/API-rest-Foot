import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Equipe_Nationale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string; //Nom de l'equipe nationale Ex = Equipe de France 

  @Column()
  Surnom: string; //Ex : France = Les BLEUS

  @Column()
  Pays: string;

  @Column()
  Continent: string;

  @Column({length : 4})
  id_fifa: string; //Ex : France = FRA

  @Column()
  logo_team: string;
}
