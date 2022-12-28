import { Injectable } from '@nestjs/common';
import { CreateEquipeNationaleDto } from './dto/create-equipe_nationale.dto';
import { UpdateEquipeNationaleDto } from './dto/update-equipe_nationale.dto';
import { Equipe_Nationale } from './entities/equipe_nationale.entity';
import { EquipeNationaleRepository } from './equipe_nationale.repository';

@Injectable()
export class Equipe_NationaleService {
  constructor(private readonly Equipe_NationaleRepository: EquipeNationaleRepository) {}

  createEquipe_Nationale(createEquipe_NationaleDto: CreateEquipeNationaleDto):Promise<Equipe_Nationale> {
    console.log('This action adds a new Equipe_Nationale');
    const Equipe_NationaleToCreate = {
      ...createEquipe_NationaleDto,
    };
    return this.Equipe_NationaleRepository.save(Equipe_NationaleToCreate);
  }

  getAllEquipe_Nationale() : Promise<Equipe_Nationale[]> {
    console.log(`This action returns all Equipe_Nationale`);
    return this.Equipe_NationaleRepository.find();
  }

  getEquipe_NationalebyId(id: number): Promise<Equipe_Nationale[]> {
    console.log(`This action returns a #${id} Equipe_Nationale`);
      return this.Equipe_NationaleRepository.find({
        where: {
          id: id,
        },
      });
  }

  updateEquipe_Nationale(id: number, updateEquipe_NationaleDto: UpdateEquipeNationaleDto) {
    console.log(`This action updates a #${id} Equipe_Nationale`);
    return this.Equipe_NationaleRepository.update(id,updateEquipe_NationaleDto);
  }

  removeEquipe_Nationale(id: number) {
    console.log(`This action removes a #${id} Equipe_Nationale`);
    return this.Equipe_NationaleRepository.delete(id);
  }
}
