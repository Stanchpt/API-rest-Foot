import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';
import { PlayersRepository } from './players.repository';

@Injectable()
export class PlayersService {
  constructor(private readonly PlayersRepository: PlayersRepository) {}

  getAllPlayers(): Promise<Player[]> {
    console.log(`This action returns all Players`);
    return this.PlayersRepository.find();
  }

  createPlayer(createPlayerDto:CreatePlayerDto): Promise<Player> {
    console.log('This action adds a new player');
    const PlayerToCreate = {
      ...createPlayerDto,
    };
    return this.PlayersRepository.save(PlayerToCreate);
  }

  getPlayerById(PlayerId: number ): Promise<Player[]> {
    console.log('This action returns #',PlayerId);
    return this.PlayersRepository.find({
      where: {
        id: PlayerId,
      },
    });
  }

  getPlayerByTeam(PlayerTeam: string ): Promise<Player[]> {
    console.log(`This action returns the #${PlayerTeam} Players`);
    return this.PlayersRepository.find({
      where: {
        equipe: PlayerTeam,
      },
    });
  }

  updatePlayer(id: string, updatePlayerDto: UpdatePlayerDto) {
    console.log(`This action updates a #${id} player`);
    return this.PlayersRepository.update(id, updatePlayerDto);
  }
  
  removePlayer(player_id : string){
    console.log(`This action removes a #${player_id} player`);
    return this.PlayersRepository.delete(player_id);
  }
}
