import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ClubService } from './club.service';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { Club } from './entities/club.entity';

@Controller('Club')
export class ClubController {
  constructor(private readonly ClubService: ClubService) {}

  @Post()
  createClub(@Body() createClubDto: CreateClubDto) : Promise<Club> {
    return this.ClubService.createClub(createClubDto);
  }

  @Get()
  getAllClub() : Promise<Club[]> {
    return this.ClubService.getAllClub();
  }

  @Get(':id')
  getClubbyId(@Param('id') id: number) : Promise<Club[]> {
    return this.ClubService.getClubbyId(id);
  }

  @Put(':id')
  updateClub(@Param('id') id: number, @Body() updateClubDto: UpdateClubDto) {
    return this.ClubService.updateClub(id, updateClubDto);
  }

  @Delete(':id')
  removeClub(@Param('id') id: number) {
    return this.ClubService.removeClub(id);
  }
}
