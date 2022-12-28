import { Module } from '@nestjs/common';
import { ClubController } from './club.controller';
import { ClubRepository } from './club.repository';
import { ClubService } from './club.service';


@Module({
  controllers: [ClubController],
  providers: [ClubService,ClubRepository]
})
export class ClubModule {}
