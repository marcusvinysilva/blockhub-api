import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjetosModule } from './projetos/projetos.module';
import { ColaboradoresModule } from './colaboradores/colaboradores.module';

@Module({
  imports: [ProjetosModule, ColaboradoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
