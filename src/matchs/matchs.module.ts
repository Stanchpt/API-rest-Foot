import { Module } from '@nestjs/common';
import { MatchsService } from './matchs.service';
import { MatchsController } from './matchs.controller';
import { MatchsRepository } from './matchs.repository';

@Module({
  controllers: [MatchsController],
  providers: [MatchsService,MatchsRepository]
})
export class MatchsModule {}
