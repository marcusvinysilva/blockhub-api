import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateColaboradorDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  cargo: string;

  @IsNotEmpty()
  admissao: string;

  @IsOptional()
  ativo: boolean;

  @IsOptional()
  projetos: number[];
}
