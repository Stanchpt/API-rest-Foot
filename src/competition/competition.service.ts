import { Injectable } from '@nestjs/common';
import { CreateCompetitionDto } from './dto/create-competition.dto';
import { UpdateCompetitionDto } from './dto/update-competition.dto';
import { CompetitionRepository } from './competition.repository';
import { Competition } from './entities/competition.entity';

@Injectable()
export class CompetitionService {
  constructor(private readonly CompetitionRepository: CompetitionRepository) {}

  createCompet(createCompetitionDto: CreateCompetitionDto): Promise<Competition> {
    console.log('This action adds a new competition');
    const CompetitionToCreate = {
      ...createCompetitionDto,
    };
    return this.CompetitionRepository.save(CompetitionToCreate);
  }

  getAllCompet() : Promise<Competition[]> {
    console.log(`This action returns all competition`);
    return this.CompetitionRepository.find();
  }

  getCompetbyId(id: number): Promise<Competition[]> {
    console.log(`This action returns a #${id} competition`);
      return this.CompetitionRepository.find({
        where: {
          id: id,
        },
      });
  }

  getCompetbyName(name_compet: string): Promise<Competition[]> {
    console.log(`This action returns a #${name_compet} competition`);
      return this.CompetitionRepository.find({
        where: {
          nom: name_compet,
        },
      });
  }

  updateCompet(id: number, updateCompetitionDto: UpdateCompetitionDto) {
    console.log(`This action updates a #${id} competition`);
    return this.CompetitionRepository.update(id,updateCompetitionDto);
  }

  removeCompet(id: number) {
    console.log(`This action removes a #${id} competition`);
    return this.CompetitionRepository.delete(id);
  }
}
