import { Module } from '@nestjs/common';
import { Equipe_nationaleController } from './equipe_nationale.controller';
import { EquipeNationaleRepository } from './equipe_nationale.repository';
import { Equipe_NationaleService } from './equipe_nationale.service';


@Module({
  controllers: [Equipe_nationaleController],
  providers: [Equipe_NationaleService,EquipeNationaleRepository]
})
export class Equipe_NationaleModule {}
