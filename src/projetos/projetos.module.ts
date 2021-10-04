import { Module } from '@nestjs/common';
import { ProjetosService } from './projetos.service';
import { ProjetosController } from './projetos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ProjetosController],
  providers: [ProjetosService],
  imports: [PrismaModule],
})
export class ProjetosModule {}
