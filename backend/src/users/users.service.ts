import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma';
import { CreateUserDto } from './dto/create-user.dto';

const prisma = new PrismaClient();

@Injectable()
export class UsersService {
  async create(data: CreateUserDto) {
    console.log('🟡 Dados recebidos em create:', data);

    if (!data.name) {
      throw new Error('Campo "name" é obrigatório');
    }

    return prisma.user.create({ data });
  }

  async findAll() {
    return prisma.user.findMany({
      include: { messages: true },
    });
  }

  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
      include: { messages: true },
    });
  }
}
