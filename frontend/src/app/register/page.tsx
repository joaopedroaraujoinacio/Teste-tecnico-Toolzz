'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleRegister = () => {
    console.log('Tentativa de registro com:', registerEmail, registerPassword);
  };

  return (
    <main className="bg-black text-gray-100 h-screen flex items-center justify-center p-4">
      <div className="bg-black shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-blue-500 text-center">Chat da Toolzz</h2>
        <h3 className="text-blue-500 text-center">Cadastro</h3>
        <div className="mb-4">
          <label htmlFor="register-email" className="block text-gray-300 text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            id="register-email"
            className="bg-gray-800 border-gray-700 text-gray-100 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2 w-full"
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="register-password" className="block text-gray-300 text-sm font-bold mb-2">Senha:</label>
          <input
            type="password"
            id="register-password"
            className="bg-gray-800 border-gray-700 text-gray-100 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2 w-full"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
            onClick={handleRegister}
          >
            <Link href="/">
            Cadastrar
          </Link>
          </button>
        </div>
        <div className="text-center mt-4">
          <Link href="/login" className="text-amber-500 hover:text-amber-400">
            Voltar para Login
          </Link>
        </div>
      </div>
    </main>
  );
}