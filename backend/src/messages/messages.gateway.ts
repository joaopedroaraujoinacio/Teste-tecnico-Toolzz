import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessagesService } from './messages.service';
import { Injectable } from '@nestjs/common';

@Injectable()
@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class MessagesGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly messagesService: MessagesService) {}

  @WebSocketServer()
  server: Server;

  afterInit() {
    console.log('WebSocket iniciado');
  }

  handleConnection(client: Socket) {
    console.log(`Cliente conectado: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Cliente desconectado: ${client.id}`);
  }

  @SubscribeMessage('message')
  async handleMessage(
    @MessageBody() data: { content: string },
    @ConnectedSocket() client: Socket,
  ) {
    console.log(`Mensagem recebida do cliente ${client.id}:`, data.content);

    const userId = '1';

    const savedMessage = await this.messagesService.create(
      { content: data.content },
      userId,
    );

    this.server.emit('message', savedMessage);
  }
}
