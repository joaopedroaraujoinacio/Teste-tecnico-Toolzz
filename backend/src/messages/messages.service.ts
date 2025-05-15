import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Message } from '.prisma/client';
import { CreateMessageDto } from './dto/create-message.dto';

const prisma = new PrismaClient();

@Injectable()
export class MessagesService {
  async create(data: CreateMessageDto, userId: string): Promise<Message> {
    return await prisma.message.create({
      data: {
        content: data.content,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  async findAll(): Promise<Message[]> {
    return await prisma.message.findMany({
      include: {
        user: true,
      },
      orderBy: {
        timestamp: 'asc',
      },
    });
  }
}
