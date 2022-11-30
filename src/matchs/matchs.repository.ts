import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Matchs } from './entities/matchs.entity';

@Injectable()
export class MatchsRepository extends Repository<Matchs> {
  constructor(private dataSource: DataSource) {
    super(Matchs, dataSource.createEntityManager());
  }
}