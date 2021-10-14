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
  UseGuards,
} from '@nestjs/common';
import { ColaboradoresService } from './colaboradores.service';
import { Colaborador } from '.prisma/client';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';
import { ApiBody } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('colaboradores')
export class ColaboradoresController {
  constructor(private colaboradoresService: ColaboradoresService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('/create')
  @ApiBody({ type: CreateColaboradorDto })
  @UsePipes(ValidationPipe)
  async create(
    @Body() createColaborador: CreateColaboradorDto,
  ): Promise<Colaborador> {
    return this.colaboradoresService.createColaborador(createColaborador);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/list')
  @UsePipes(ValidationPipe)
  async findAll(): Promise<Colaborador[]> {
    return this.colaboradoresService.findAllColaboradores();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  async findUnique(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Colaborador> {
    return this.colaboradoresService.findOneColaborador(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('/update/:id')
  @ApiBody({ type: CreateColaboradorDto })
  @UsePipes(ValidationPipe)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateColaborador: CreateColaboradorDto,
  ): Promise<Colaborador> {
    return this.colaboradoresService.updateColaborador(id, updateColaborador);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.colaboradoresService.removeOneColaborador({ id: Number(id) });
  }
}
