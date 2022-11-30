import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { TeamsRepository } from './teams.repository';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamsService {
  constructor(private readonly teamsRepository: TeamsRepository) {}

  createTeams(createteamsDto: CreateTeamDto):Promise<Team> {
    console.log('This action adds a new teams');
    const teamsToCreate = {
      ...createteamsDto,
    };
    return this.teamsRepository.save(teamsToCreate);
  }

  getAllTeams() : Promise<Team[]> {
    console.log(`This action returns all teams`);
    return this.teamsRepository.find();
  }

  getTeambyId(id: number): Promise<Team[]> {
    console.log(`This action returns a #${id} teams`);
      return this.teamsRepository.find({
        where: {
          id: id,
        },
      });
  }

  updateTeam(id: number, updateteamsDto: UpdateTeamDto) {
    console.log(`This action updates a #${id} teams`);
    return this.teamsRepository.update(id,updateteamsDto);
  }

  removeTeam(id: number) {
    console.log(`This action removes a #${id} teams`);
    return this.teamsRepository.delete(id);
  }
}
