import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Projeto, Prisma } from '.prisma/client';
import { CreateProjetoDto } from './dto/create-projeto.dto';

@Injectable()
export class ProjetosService {
  constructor(private prisma: PrismaService) {}

  async createProjeto(data: CreateProjetoDto) {
    const colaboradores = data.colaboradores?.map((colaborador) => ({
      id: colaborador,
    }));

    return this.prisma.projeto.create({
      data: {
        ...data,
        colaboradores: {
          connect: colaboradores,
        },
      },
      include: {
        colaboradores: true,
      },
    });
  }

  async findAllProjetos(): Promise<Projeto[]> {
    return this.prisma.projeto.findMany();
  }

  async findOneProjeto(projetoId: number): Promise<Projeto> {
    return this.prisma.projeto.findUnique({
      where: {
        id: projetoId,
      },
      include: {
        colaboradores: true,
      },
    });
  }

  async updateProjeto(id: number, data: CreateProjetoDto) {
    const colaboradores = data.colaboradores?.map((colaborador) => ({
      id: colaborador,
    }));

    return this.prisma.projeto.update({
      where: { id },
      data: {
        ...data,
        colaboradores: {
          connect: colaboradores,
        },
      },
      include: {
        colaboradores: true,
      },
    });
  }

  async removeOneProjeto(
    where: Prisma.ProjetoWhereUniqueInput,
  ): Promise<Projeto> {
    return this.prisma.projeto.delete({ where });
  }
}
