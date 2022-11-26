import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Match } from './entities/match.entity';

@Injectable()
export class MatchsRepository extends Repository<Match> {
  constructor(private dataSource: DataSource) {
    super(Match, dataSource.createEntityManager());
  }
}