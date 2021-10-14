import { Usuario } from '.prisma/client';
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { AuthResponse, LoginDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @UsePipes(ValidationPipe)
  @ApiBody({ type: LoginDto })
  @Post('create')
  async createUser(@Body() data: LoginDto): Promise<Usuario> {
    return this.service.createUsuario(data);
  }

  @UsePipes(ValidationPipe)
  @ApiBody({ type: LoginDto })
  @Post('login')
  login(@Body() data: LoginDto): Promise<AuthResponse> {
    return this.service.login(data);
  }
}
