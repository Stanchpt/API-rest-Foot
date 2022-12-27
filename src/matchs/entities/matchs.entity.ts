import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Matchs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Adv1: string;

  @Column()
  Adv2: string;

  @Column()
  competition: string;

  @Column()
  stade_competition: string;

  @Column({ type: 'date' })
  date: Date;

  @Column()
  heure:number;

  @Column()
  img_match : string;
}