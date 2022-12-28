import { PartialType } from '@nestjs/mapped-types';
import { CreateEquipeNationaleDto } from './create-equipe_nationale.dto';

export class UpdateEquipeNationaleDto extends PartialType(CreateEquipeNationaleDto) {}
