import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  createPlayer(@Body() newPlayer: CreatePlayerDto): Promise<Player> {
      return this.playersService.createPlayer(newPlayer);
    }
    
  @Get()
  getAllPlayers() : Promise<Player[]> {
    return this.playersService.getAllPlayers();
  }

  @Get(':id')
  getPlayerbyId(@Param('id') PlayerId: number,): Promise<Player[]> {
    return this.playersService.getPlayerById(PlayerId);
  }

  @Get(':equipe')
  getPlayerbyTeam(@Param('equipe') PlayerTeam: string,): Promise<Player[]> {
    return this.playersService.getPlayerByTeam(PlayerTeam);
  }

  @Put(':id')
  updatePlayer(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    console.log('Body', updatePlayerDto);
    return this.playersService.updatePlayer(id, updatePlayerDto);
  }

  @Delete(':id')
  removePlayer(@Param('id') player_id: string) {
    return this.playersService.removePlayer(player_id);
  }
}
