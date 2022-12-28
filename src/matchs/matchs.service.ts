import { Injectable } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { MatchsRepository } from './matchs.repository';
import { Matchs } from './entities/matchs.entity';

@Injectable()
export class MatchsService {
  constructor(private readonly MatchRepository: MatchsRepository) {}

  createMatch(createMatchDto: CreateMatchDto):Promise<Matchs> {
    console.log('This action adds a new match');
    const MatchToCreate = {
      ...createMatchDto,
    };
    return this.MatchRepository.save(MatchToCreate);
  }

  getAllMatchs() : Promise<Matchs[]> {
    console.log(`This action returns all matchs`);
    return this.MatchRepository.find();
  }

  getMatchbyId(id: number): Promise<Matchs[]> {
    console.log(`This action returns a #${id} Match`);
      return this.MatchRepository.find({
        where: {
          id: id,
        },
      });
  }
  
  getMatchbyComp(competition : string): Promise<Matchs[]> {
    console.log(`This action returns the matchs of #${competition}`);
      return this.MatchRepository.find({
        where: {
          competition : competition,
        },
      });
  }

  updateMatch(id: number, updateMatchDto: UpdateMatchDto) {
    console.log(`This action updates a #${id} Match`);
    return this.MatchRepository.update(id,updateMatchDto);
  }

  removeMatch(id: number) {
    console.log(`This action removes a #${id} Match`);
    return this.MatchRepository.delete(id);
  }
}
