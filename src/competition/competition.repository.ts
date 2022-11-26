import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Competition } from './entities/competition.entity';

@Injectable()
export class CompetitionRepository extends Repository<Competition> {
  constructor(private dataSource: DataSource) {
    super(Competition, dataSource.createEntityManager());
  }
}
