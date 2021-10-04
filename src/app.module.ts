import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjetosModule } from './projetos/projetos.module';
import { ColaboradoresModule } from './colaboradores/colaboradores.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ProjetosModule, ColaboradoresModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
