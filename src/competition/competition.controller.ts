import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CompetitionService } from './competition.service';
import { CreateCompetitionDto } from './dto/create-competition.dto';
import { UpdateCompetitionDto } from './dto/update-competition.dto';
import { Competition } from './entities/competition.entity';

@Controller('competition')
export class CompetitionController {
  constructor(private readonly competitionService: CompetitionService) {}

  @Post()
  createCompet(@Body() createCompetitionDto: CreateCompetitionDto): Promise<Competition> {
    return this.competitionService.createCompet(createCompetitionDto);
  }

  @Get()
  getAllCompet() : Promise<Competition[]> {
    return this.competitionService.getAllCompet();
  }

  @Get(':id')
  getCompetbyId(@Param('id') id: number) : Promise<Competition[]> {
    return this.competitionService.getCompetbyId(id);
  }

  @Get(':nom')
  getCompetbyName(@Param('nom') nom: string) : Promise<Competition[]> {
    return this.competitionService.getCompetbyName(nom);
  }

  @Put(':id')
  updateCompet(@Param('id') id: number, @Body() updateCompetitionDto: UpdateCompetitionDto) {
    return this.competitionService.updateCompet(id, updateCompetitionDto);
  }

  @Delete(':id')
  removeCompet(@Param('id') id: number) {
    return this.competitionService.removeCompet(id);
  }
}
