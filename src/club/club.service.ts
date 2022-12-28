import { Injectable } from '@nestjs/common';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { ClubRepository } from './club.repository';
import { Club } from './entities/club.entity';

@Injectable()
export class ClubService {
  constructor(private readonly ClubsRepository: ClubRepository) {}

  createClub(createClubsDto: CreateClubDto):Promise<Club> {
    console.log('This action adds a new Clubs');
    const ClubsToCreate = {
      ...createClubsDto,
    };
    return this.ClubsRepository.save(ClubsToCreate);
  }

  getAllClub() : Promise<Club[]> {
    console.log(`This action returns all Clubs`);
    return this.ClubsRepository.find();
  }

  getClubbyId(id: number): Promise<Club[]> {
    console.log(`This action returns a #${id} Clubs`);
      return this.ClubsRepository.find({
        where: {
          id: id,
        },
      });
  }

  updateClub(id: number, updateClubsDto: UpdateClubDto) {
    console.log(`This action updates a #${id} Clubs`);
    return this.ClubsRepository.update(id,updateClubsDto);
  }

  removeClub(id: number) {
    console.log(`This action removes a #${id} Clubs`);
    return this.ClubsRepository.delete(id);
  }
}
