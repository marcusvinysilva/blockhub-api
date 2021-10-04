import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProjetoDto {
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  descricao: string;

  @IsNotEmpty()
  inicio: string;

  @IsOptional()
  fim: string;

  @IsOptional()
  ativo: boolean;

  @IsOptional()
  colaboradores: number[];
}
