import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClient } from '@prisma/client';

async function bootstrap(): Promise<void> {
  const prisma = new PrismaClient();

  try {
    const existing = await prisma.user.findUnique({
      where: { id: 'user-1' },
    });

    if (!existing) {
      await prisma.user.create({
        data: {
          id: 'user-1',
          name: 'João Teste',
          email: 'joao@email.com',
          password: 'senha_teste',
        },
      });
      console.log('Usuário user-1 criado');
    }
  } catch (error) {
    console.error('Erro ao verificar/criar o usuário:', error);
  } finally {
    await prisma.$disconnect();
  }

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  await app.listen(3001);
}

void bootstrap();
