'use client';

import { useEffect, useState } from 'react';
import { useSocket } from './useSocket';

type Message = {
  id: number;
  content: string;
  userId: number;
  user: {
    name: string;
  };
};

export const useMessages = () => {
  const socket = useSocket();
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/messages')
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (message: Message) => {
      setMessages((prev) => [...prev, message]);
    };

    socket.on('message', handleNewMessage);

    return () => {
      socket.off('message', handleNewMessage);
    };
  }, [socket]);

  return { messages };
};
