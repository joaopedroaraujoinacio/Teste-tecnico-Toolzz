import { Injectable, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { SignupDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<{ id: string; email: string } | null> {
    const user = await this.usersService.findByEmail(email);

    if (user && (await bcrypt.compare(password, user.password))) {
      return { id: user.id, email: user.email };
    }

    return null;
  }

  login(user: { id: string; email: string }) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signup(signupDto: SignupDto) {
    const { name, email, password } = signupDto;

    const existingUser = await this.usersService.findByEmail(email);
    if (existingUser) {
      throw new ConflictException('E-mail já está em uso');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.usersService.create({
      name,
      email,
      password: hashedPassword,
    });

    return {
      message: 'Usuário cadastrado com sucesso!',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }
}
