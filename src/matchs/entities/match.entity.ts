import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Match {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Adv1: string;

  @Column()
  Adv2: string;

  @Column()
  competition: string;

  @Column()
  Date: Date;

  @Column()
  Heure: string;
}