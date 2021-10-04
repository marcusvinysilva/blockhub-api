import { Injectable } from '@nestjs/common';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';

@Injectable()
export class ColaboradoresService {
  create(createColaboradorDto: CreateColaboradorDto) {
    return 'This action adds a new colaborador';
  }

  findAll() {
    return `This action returns all colaboradores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} colaborador`;
  }

  update(id: number, updateColaboradorDto: CreateColaboradorDto) {
    return `This action updates a #${id} colaborador`;
  }

  remove(id: number) {
    return `This action removes a #${id} colaborador`;
  }
}
