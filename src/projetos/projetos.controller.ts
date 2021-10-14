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
import { ProjetosService } from './projetos.service';
import { Projeto } from '.prisma/client';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { ApiBody } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('projetos')
export class ProjetosController {
  constructor(private projetosService: ProjetosService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('/create')
  @ApiBody({ type: CreateProjetoDto })
  @UsePipes(ValidationPipe)
  async create(@Body() createProjeto: CreateProjetoDto): Promise<Projeto> {
    return this.projetosService.createProjeto(createProjeto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/list')
  @UsePipes(ValidationPipe)
  async findAll(): Promise<Projeto[]> {
    return this.projetosService.findAllProjetos();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  async findUnique(@Param('id', ParseIntPipe) id: number): Promise<Projeto> {
    return this.projetosService.findOneProjeto(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('/update/:id')
  @ApiBody({ type: CreateProjetoDto })
  @UsePipes(ValidationPipe)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProjeto: CreateProjetoDto,
  ): Promise<Projeto> {
    return this.projetosService.updateProjeto(id, updateProjeto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.projetosService.removeOneProjeto({ id: Number(id) });
  }
}
