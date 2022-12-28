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

  @Column({ nullable: true })
  club: string; //Nom du club ou de l'equipe nationale Ex = Paris St-Germain

  @Column({ nullable: true })
  equipe_nationale: string; //Nom du club ou de l'equipe nationale Ex =Equipe de France
}