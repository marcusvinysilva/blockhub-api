import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Colaborador, Prisma } from '.prisma/client';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';

@Injectable()
export class ColaboradoresService {
  constructor(private prisma: PrismaService) {}

  async createColaborador(data: CreateColaboradorDto) {
    const projetos = data.projetos?.map((projeto) => ({
      id: projeto,
    }));

    return this.prisma.colaborador.create({
      data: {
        ...data,
        projetos: {
          connect: projetos,
        },
      },
      include: {
        projetos: true,
      },
    });
  }

  async findAllColaboradores(): Promise<Colaborador[]> {
    return this.prisma.colaborador.findMany();
  }

  async findOneColaborador(colaboradorId: number): Promise<Colaborador> {
    return this.prisma.colaborador.findUnique({
      where: {
        id: colaboradorId,
      },
      include: {
        projetos: true,
      },
    });
  }

  async updateColaborador(id: number, data: CreateColaboradorDto) {
    const projetos = data.projetos?.map((projeto) => ({
      id: projeto,
    }));

    return this.prisma.colaborador.update({
      where: { id },
      data: {
        ...data,
        projetos: {
          connect: projetos,
        },
      },
      include: {
        projetos: true,
      },
    });
  }

  async removeOneColaborador(
    where: Prisma.ColaboradorWhereUniqueInput,
  ): Promise<Colaborador> {
    return this.prisma.colaborador.delete({ where });
  }
}
