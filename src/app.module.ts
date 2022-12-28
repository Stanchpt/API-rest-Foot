import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayersModule } from './players/players.module';
import { CompetitionModule } from './competition/competition.module';
import { MatchsModule } from './matchs/matchs.module';
import { Player } from './players/entities/player.entity';
import { Competition } from './competition/entities/competition.entity';
import { Matchs } from './matchs/entities/matchs.entity';
import { Equipe_Nationale } from './equipe_nationale/entities/equipe_nationale.entity';
import { Equipe_NationaleModule } from './equipe_nationale/equipe_nationale.module';
import { Club } from './club/entities/club.entity';
import { ClubModule } from './club/club.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'foot-2022',
      entities: [Player,Equipe_Nationale,Club,Competition,Matchs],
      synchronize: true,
    }),
    Equipe_NationaleModule,
    ClubModule,
    PlayersModule,
    CompetitionModule,
    MatchsModule,
  ],
})
export class AppModule {}
