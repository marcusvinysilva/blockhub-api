import { Usuario } from '.prisma/client';
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { AuthResponse, LoginDto } from './dtos/auth.dto';
import { AuthService } from './auth.service';
import { ReturnCreateUserDto } from './dtos/return-usuario.dto';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @UsePipes(ValidationPipe)
  @ApiBody({ type: LoginDto })
  @Post('create')
  async createUser(@Body() data: LoginDto): Promise<ReturnCreateUserDto> {
    await this.service.createUsuario(data);
    return { message: 'Usuário criado com sucesso' };
  }

  @UsePipes(ValidationPipe)
  @ApiBody({ type: LoginDto })
  @Post('login')
  login(@Body() data: LoginDto): Promise<AuthResponse> {
    return this.service.login(data);
  }
}
