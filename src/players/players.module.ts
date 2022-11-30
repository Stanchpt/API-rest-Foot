import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { PlayersRepository } from './players.repository';

@Module({
  controllers: [PlayersController],
  providers: [PlayersService,PlayersRepository]
})
export class PlayersModule {}
