import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post()
  createTeams(@Body() createTeamDto: CreateTeamDto) : Promise<Team> {
    return this.teamsService.createTeams(createTeamDto);
  }

  @Get()
  getAllTeams() : Promise<Team[]> {
    return this.teamsService.getAllTeams();
  }

  @Get(':id')
  getTeambyId(@Param('id') id: number) : Promise<Team[]> {
    return this.teamsService.getTeambyId(id);
  }

  @Put(':id')
  updateTeam(@Param('id') id: number, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamsService.updateTeam(id, updateTeamDto);
  }

  @Delete(':id')
  removeTeam(@Param('id') id: number) {
    return this.teamsService.removeTeam(id);
  }
}
