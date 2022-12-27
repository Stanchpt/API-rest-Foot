import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  age: number;

  @Column()
  equipe: string; //Nom du club ou de l'equipe nationale Ex = Paris St-Germain ou Equipe de France
}