import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthResponse, LoginDto } from './auth.dto';
import * as bcrypt from 'bcrypt';
import { Usuario } from '.prisma/client';

@Injectable()
export class AuthService {
  constructor(private db: PrismaService, private jwt: JwtService) {}

  async createUsuario(data: LoginDto): Promise<Usuario> {
    const existing = await this.db.usuario.findUnique({
      where: { login: data.login },
    });

    if (existing) {
      throw new ConflictException('Login já existente');
    }

    const hashedSenha = await bcrypt.hash(data.senha, 10);

    const usuario = await this.db.usuario.create({
      data: {
        ...data,
        senha: hashedSenha,
      },
    });

    return usuario;
  }

  async login(data: LoginDto): Promise<AuthResponse> {
    const { login, senha } = data;

    const usuario = await this.db.usuario.findUnique({
      where: { login },
    });

    if (!usuario) {
      throw new UnauthorizedException('invalid_credentials');
    }

    const passwordValid = await bcrypt.compare(senha, usuario.senha);

    if (!passwordValid) {
      throw new UnauthorizedException('invalid_credentials');
    }

    delete usuario.senha;

    return {
      token: this.jwt.sign({ login }),
      usuario,
    };
  }
}
