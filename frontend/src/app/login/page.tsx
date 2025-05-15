'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleLogin = () => {
    console.log('Tentativa de login com:', loginEmail, loginPassword);
  };

  return (
    <main className="bg-black text-gray-100 h-screen flex items-center justify-center p-4">
      <div className="bg-black shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-amber-500 text-center">Chat da Toolzz</h2>
        <h3 className="text-amber-500 text-center">Login</h3>
        <div className="mb-4">
          <label htmlFor="login-email" className="block text-gray-300 text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            id="login-email"
            className="bg-gray-800 border-gray-700 text-gray-100 rounded-md shadow-sm focus:border-amber-500 focus:ring-amber-500 px-4 py-2 w-full"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="login-password" className="block text-gray-300 text-sm font-bold mb-2">Senha:</label>
          <input
            type="password"
            id="login-password"
            className="bg-gray-800 border-gray-700 text-gray-100 rounded-md shadow-sm focus:border-amber-500 focus:ring-amber-500 px-4 py-2 w-full"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center mb-4">
          <button
            className="bg-amber-600 hover:bg-amber-700 text-black font-semibold rounded-md shadow-md px-6 py-2 focus:outline-none focus:ring-amber-500 w-full"
            type="button"
            onClick={handleLogin}
          >
            <Link href="/">
            Entrar
          </Link>
          </button>
        </div>
        <div className="text-center mt-4">
          <Link href="/register" className="text-blue-500 hover:text-blue-400">
            Cadastrar
          </Link>
        </div>
      </div>
    </main>
  );
}