import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamsModule } from './teams/teams.module';
import { PlayersModule } from './players/players.module';
import { CompetitionModule } from './competition/competition.module';
import { MatchsModule } from './matchs/matchs.module';
import { Player } from './players/entities/player.entity';
import { Team } from './teams/entities/team.entity';
import { Competition } from './competition/entities/competition.entity';
import { Matchs } from './matchs/entities/matchs.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'foot-2022',
      entities: [Player,Team,Competition,Matchs],
      synchronize: true,
    }),
    TeamsModule,
    PlayersModule,
    CompetitionModule,
    MatchsModule,
  ],
})
export class AppModule {}
