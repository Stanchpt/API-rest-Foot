import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { TeamsRepository } from './teams.repository';

@Module({
  controllers: [TeamsController],
  providers: [TeamsService,TeamsRepository]
})
export class TeamsModule {}
