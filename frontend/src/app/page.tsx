'use client';

import { useEffect, useState, useRef } from 'react';
import { useSocket } from '../hooks/useSocket';
import { useMessages } from '../hooks/useMessages';
import Link from 'next/link'; 

export default function HomePage() {
  const socket = useSocket();
  const [message, setMessage] = useState('');
  const { messages } = useMessages();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!socket) return;

    socket.on('connect', () => {
      console.log('🔌 Conectado ao servidor via WebSocket! ID:', socket.id);
    });

    return () => {
      socket.off('connect');
    };
  }, [socket]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (message.trim() === '' || !socket) return;
    socket.emit('message', { content: message });
    setMessage('');
  };

  return (
    <main className="bg-black text-gray-100 h-screen flex flex-col items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <Link href="/login" className="bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md shadow-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500">
          Logout
        </Link>
      </div>
      <div className="bg-black shadow-md rounded-lg flex flex-col w-full max-w-md h-full max-h-[80vh]">
        <div className="p-4 flex-grow overflow-y-auto">
          <h1 className="text-xl font-bold mb-4 text-amber-500 text-center">Chat da Toolzz</h1>
          <ul className="mb-4 space-y-2">
            {messages.map((msg) => (
              <li
                key={msg.id}
                className={`p-3 rounded-lg ${
                  msg.user?.name === 'Você' ? 'bg-amber-700 text-black self-end' : 'bg-brown-600 text-gray-100 self-start'
                }`}
              >
                <strong className={msg.user?.name === 'Você' ? 'font-semibold' : 'font-bold text-amber-400'}>
                  {msg.user?.name}:
                </strong>{' '}
                {msg.content}
              </li>
            ))}
            <div ref={messagesEndRef} />
          </ul>
        </div>

        <div className="bg-black border-t border-gray-800 p-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Digite sua mensagem..."
              className="bg-gray-800 border-gray-700 text-gray-100 rounded-md shadow-sm focus:border-amber-500 focus:ring-amber-500 px-4 py-2 flex-grow"
            />
            <button
              onClick={sendMessage}
              className="bg-amber-600 hover:bg-amber-700 text-black font-semibold rounded-md shadow-md px-6 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 