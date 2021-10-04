import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ColaboradoresService } from './colaboradores.service';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';

@Controller('colaboradores')
export class ColaboradoresController {
  constructor(private readonly colaboradoresService: ColaboradoresService) {}

  @Post()
  create(@Body() createColaboradoreDto: CreateColaboradorDto) {
    return this.colaboradoresService.create(createColaboradoreDto);
  }

  @Get()
  findAll() {
    return this.colaboradoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.colaboradoresService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateColaboradoreDto: CreateColaboradorDto,
  ) {
    return this.colaboradoresService.update(+id, updateColaboradoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.colaboradoresService.remove(+id);
  }
}
