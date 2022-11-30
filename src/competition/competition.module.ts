import { Module } from '@nestjs/common';
import { CompetitionService } from './competition.service';
import { CompetitionController } from './competition.controller';
import { CompetitionRepository } from './competition.repository';

@Module({
  controllers: [CompetitionController],
  providers: [CompetitionService,CompetitionRepository]
})
export class CompetitionModule {}
