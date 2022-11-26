import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamsRepository extends Repository<Team> {
  constructor(private dataSource: DataSource) {
    super(Team, dataSource.createEntityManager());
  }
}