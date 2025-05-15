import { useEffect, useState } from 'react';
import { useSocket } from '../hooks/useSocket';

interface Message {
  user: string;
  content: string;
}

export function Chat({ username }: { username: string }) {
  const socket = useSocket();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (!socket) return;

    socket.on('message', (newMessage: Message) => {
      setMessages((prev) => [...prev, newMessage]);
    });

    return () => {
      socket.off('message');
    };
  }, [socket]);

  const sendMessage = () => {
    if (socket && message.trim()) {
      socket.emit('message', { user: username, content: message });
      setMessage('');
    }
  };

  return (
    <div style={{ padding: 32 }}>
      <div style={{ border: '1px solid #ccc', height: 300, overflowY: 'scroll', marginBottom: 8 }}>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.user}</strong>: {msg.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        placeholder="Digite sua mensagem"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Enviar</button>
    </div>
  );
}
