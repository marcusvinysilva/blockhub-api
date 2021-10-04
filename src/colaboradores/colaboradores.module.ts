import { Module } from '@nestjs/common';
import { ColaboradoresService } from './colaboradores.service';
import { ColaboradoresController } from './colaboradores.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ColaboradoresController],
  providers: [ColaboradoresService],
  imports: [PrismaModule],
})
export class ColaboradoresModule {}
