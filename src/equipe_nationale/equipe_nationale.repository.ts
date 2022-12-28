import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Equipe_Nationale } from './entities/equipe_nationale.entity';

@Injectable()
export class EquipeNationaleRepository extends Repository<Equipe_Nationale> {
  constructor(private dataSource: DataSource) {
    super(Equipe_Nationale, dataSource.createEntityManager());
  }
}