import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Competition {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  Annee: number;

  @Column()
  nb_equipe: number;

  @Column()
  region : string;

  @Column()
  url_info : string; 

  @Column()
  url_image :string;
}
