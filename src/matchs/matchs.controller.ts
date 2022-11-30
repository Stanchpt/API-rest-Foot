import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { MatchsService } from './matchs.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { Matchs } from './entities/matchs.entity';


@Controller('matchs')
export class MatchsController {
  constructor(private readonly matchsService: MatchsService) {}

  @Post()
  createMatch(@Body() createMatchDto: CreateMatchDto) : Promise<Matchs> {
    return this.matchsService.createMatch(createMatchDto);
  }

  @Get()
  getAllMatchs(): Promise<Matchs[]> {
    return this.matchsService.getAllMatchs();
  }

  @Get(':id')
  getMatchbyId(@Param('id') id: number): Promise<Matchs[]> {
    return this.matchsService.getMatchbyId(id);
  }

  @Put(':id')
  updateMatch(@Param('id') id: number, @Body() updateMatchDto: UpdateMatchDto) {
    return this.matchsService.updateMatch(id, updateMatchDto);
  }

  @Delete(':id')
  removeMatch(@Param('id') id: number) {
    return this.matchsService.removeMatch(id);
  }
}
