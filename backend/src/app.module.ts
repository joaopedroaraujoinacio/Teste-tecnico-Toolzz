import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesGateway } from './messages/messages.gateway';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';
import { AuthModule } from './auth/auth.module';
import { ChatGateway } from './chat/chat.gateway';

@Module({
  imports: [UsersModule, MessagesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, ChatGateway, MessagesGateway],
})
export class AppModule {}
