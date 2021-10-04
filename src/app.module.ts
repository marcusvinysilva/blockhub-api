import { Module } from '@nestjs/common';
import { ProjetosModule } from './projetos/projetos.module';
import { ColaboradoresModule } from './colaboradores/colaboradores.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ProjetosModule, ColaboradoresModule, PrismaModule],
})
export class AppModule {}
