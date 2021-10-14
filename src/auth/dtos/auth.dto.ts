import { IsString, Length } from 'class-validator';
import { Usuario } from '.prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty()
  @IsString()
  @Length(3, 30)
  login: string;

  @ApiProperty()
  @IsString()
  @Length(8, 30)
  senha: string;
}

export class AuthResponse {
  token: string;
  usuario: Usuario;
  message: string;
}
