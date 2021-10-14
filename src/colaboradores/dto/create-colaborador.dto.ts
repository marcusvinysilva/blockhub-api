import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateColaboradorDto {
  @ApiProperty()
  @IsNotEmpty()
  nome: string;

  @ApiProperty()
  @IsNotEmpty()
  cargo: string;

  @ApiProperty()
  @IsNotEmpty()
  admissao: string;

  @ApiProperty()
  @IsOptional()
  ativo: boolean;

  @ApiProperty()
  @IsOptional()
  projetos: number[];
}
