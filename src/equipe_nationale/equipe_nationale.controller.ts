import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateEquipeNationaleDto } from './dto/create-equipe_nationale.dto';
import { UpdateEquipeNationaleDto } from './dto/update-equipe_nationale.dto';
import { Equipe_Nationale } from './entities/equipe_nationale.entity';
import { Equipe_NationaleService } from './equipe_nationale.service';

@Controller('Equipe_nationale')
export class Equipe_nationaleController {
  constructor(private readonly equipe_nationaleService: Equipe_NationaleService) {}

  @Post()
  createequipe_natiionale(@Body() createEquipe_NationaleDto: CreateEquipeNationaleDto) : Promise<Equipe_Nationale> {
    return this.equipe_nationaleService.createEquipe_Nationale(createEquipe_NationaleDto);
  }

  @Get()
  getAllequipe_natiionale() : Promise<Equipe_Nationale[]> {
    return this.equipe_nationaleService.getAllEquipe_Nationale();
  }

  @Get(':id')
  getEquipe_NationalebyId(@Param('id') id: number) : Promise<Equipe_Nationale[]> {
    return this.equipe_nationaleService.getEquipe_NationalebyId(id);
  }

  @Put(':id')
  updateEquipe_Nationale(@Param('id') id: number, @Body() updateEquipeNationaleDto: UpdateEquipeNationaleDto) {
    return this.equipe_nationaleService.updateEquipe_Nationale(id, updateEquipeNationaleDto);
  }

  @Delete(':id')
  removeEquipe_Nationale(@Param('id') id: number) {
    return this.equipe_nationaleService.removeEquipe_Nationale(id);
  }
}
