import { Injectable } from '@nestjs/common';
import { CreateProjetoDto } from './dto/create-projeto.dto';

@Injectable()
export class ProjetosService {
  create(createProjetoDto: CreateProjetoDto) {
    return 'This action adds a new projeto';
  }

  findAll() {
    return `This action returns all projetos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projeto`;
  }

  update(id: number, updateProjetoDto: CreateProjetoDto) {
    return `This action updates a #${id} projeto`;
  }

  remove(id: number) {
    return `This action removes a #${id} projeto`;
  }
}
