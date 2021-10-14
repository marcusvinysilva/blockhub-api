import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ValidationPipe,
  UsePipes,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { ColaboradoresService } from './colaboradores.service';
import { Colaborador } from '.prisma/client';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('colaboradores')
export class ColaboradoresController {
  constructor(private colaboradoresService: ColaboradoresService) {}

  @Post('/create')
  @ApiBody({ type: CreateColaboradorDto })
  @UsePipes(ValidationPipe)
  async create(
    @Body() createColaborador: CreateColaboradorDto,
  ): Promise<Colaborador> {
    return this.colaboradoresService.createColaborador(createColaborador);
  }

  @Get('/list')
  @UsePipes(ValidationPipe)
  async findAll(): Promise<Colaborador[]> {
    return this.colaboradoresService.findAllColaboradores();
  }

  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  async findUnique(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Colaborador> {
    return this.colaboradoresService.findOneColaborador(id);
  }

  @Put('/update/:id')
  @ApiBody({ type: CreateColaboradorDto })
  @UsePipes(ValidationPipe)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateColaborador: CreateColaboradorDto,
  ): Promise<Colaborador> {
    return this.colaboradoresService.updateColaborador(id, updateColaborador);
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.colaboradoresService.removeOneColaborador({ id: Number(id) });
  }
}
