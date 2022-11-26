import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayersRepository extends Repository<Player> {
  constructor(private dataSource: DataSource) {
    super(Player, dataSource.createEntityManager());
  }
}