import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RequestWithUser } from 'src/auth/types/request-with-user';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateMessageDto, @Request() req: RequestWithUser) {
    const userId = req.user.userId;
    return this.messagesService.create(dto, userId);
  }

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }
}
