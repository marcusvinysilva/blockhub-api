import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProjetoDto {
  @ApiProperty()
  @IsNotEmpty()
  nome: string;

  @ApiProperty()
  @IsOptional()
  descricao: string;

  @ApiProperty()
  @IsNotEmpty()
  inicio: string;

  @ApiProperty()
  @IsOptional()
  fim: string;

  @ApiProperty()
  @IsOptional()
  ativo: boolean;

  @ApiProperty()
  @IsOptional()
  colaboradores: number[];
}
