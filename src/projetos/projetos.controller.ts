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
import { ProjetosService } from './projetos.service';
import { Projeto } from '.prisma/client';
import { CreateProjetoDto } from './dto/create-projeto.dto';

@Controller('projetos')
export class ProjetosController {
  constructor(private projetosService: ProjetosService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() createProjeto: CreateProjetoDto): Promise<Projeto> {
    return this.projetosService.createProjeto(createProjeto);
  }

  @Get()
  @UsePipes(ValidationPipe)
  async findAll(): Promise<Projeto[]> {
    return this.projetosService.findAllProjetos();
  }

  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  async findUnique(@Param('id', ParseIntPipe) id: number): Promise<Projeto> {
    return this.projetosService.findOneProjeto(id);
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProjeto: CreateProjetoDto,
  ): Promise<Projeto> {
    return this.projetosService.updateProjeto(id, updateProjeto);
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.projetosService.removeOneProjeto({ id: Number(id) });
  }
}
