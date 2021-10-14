import { Module } from '@nestjs/common';
import { ProjetosModule } from './projetos/projetos.module';
import { ColaboradoresModule } from './colaboradores/colaboradores.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ProjetosModule, ColaboradoresModule, PrismaModule, AuthModule],
  providers: [PrismaService],
})
export class AppModule {}
