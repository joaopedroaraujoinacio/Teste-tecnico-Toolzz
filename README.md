Este projeto é a entrega do teste técnico da empresa Toolzz, com o objetivo de construir um sistema completo de chat em tempo real.

O projeto não está finalizada e não cumpriu com todos os requisitos propostos, porém, tudo o que foi feito, foi feito com bastante dedicação.

A aplicação consiste em um frontend construído com Next.js e um backend em NestJS, utilizando WebSockets para comunicação em tempo real.
Durante o desenvolvimento deste teste técnico, utilizei ferramentas de inteligência artificial como o ChatGPT e o Gemini como auxiliares na pesquisa,
na geração de ideias e para tirar dúvidas. As ferramentas de IA foram usadas como recursos de apoio para otimizar o processo de desenvolvimento e aprofundar 
o entendimento de conceitos e tecnologias, principalmente na parte do backend, que tenho menos afinidade.

Funcionalidades principais:

- Conexão via WebSocket: Utilização de WebSockets para uma comunicação bidirecional e de baixa latência (Funcionando)
- A interface de Login e Cadastro está feita, mas não está funcional
- Design Responsivo: A interface se adapta a diferentes tamanhos de tela (Implementado visualmente)
- Estilização: Interface de usuário moderna e intuitiva, focada em cores preto e laranja (Implementado visualmente)

Techs utilizadas no projeto:

Na parte de backend:
- NestJS - Framework Node.js com arquitetura escalável
- Prisma - ORM moderno para PostgreSQL
- PostgreSQL - Banco de dados relacional
- WebSockets via @nestjs/websockets - Comunicação em tempo real
- Autenticação com JWT (tokens)
- Docker para banco de dados local
- Insomnia - Utilizado para testar os endpoints da API backend durante o desenvolvimento

Na parte do frontend:
- React + Next.js — Framework moderno de React
- Tailwind CSS — Estilização rápida e responsiva
- Comunicação com backend via REST + WebSocket
- Hooks customizados para gestão de estado e conexão

Para rodar:

*porta padrão do frontend é 3000 e a do backend 3001

É necessário:

- Node.js
- Docker
- npm ou Yarn

1. Subir no banco de dados com o docker

comando: docker run --name postgres-chat -e POSTGRES_PASSWORD=1234 -p 5432:5432 -d postgres

2. Clonar repo

comando 1: git clone https://github.com/joaopedroaraujoinacio/Teste-tecnico-Toolzz.git
comando 2: cd Teste-tecnico-Toolzz

3. Instalar dependências

back: 
comando 1: cd backend
comando 2: npm install

frontend:
comando 1: cd frontend
comando 2: npm install

4. Configurar variáveis de ambiente

Crie um arquivo .env na pasta backend com o seguinte conteúdo:

DATABASE_URL=postgresql://postgres:1234@localhost:5432/postgres

5. Aplicar as migrations e gerar Prisma Client

comando 1: cd backend
comando 2: npx prisma migrate dev --name init

6. Iniciar o backend

comando: npm run start:dev

7. Iniciar o frontend

comando 1: cd frontend
comando 2: npm run dev

Por fim, mesmo que o deploy não tenha sido concluído com sucesso, o projeto está funcional localmente e cumpre alguns requisitos técnicos propostos.

Espero que a tentativa e o esforço estejam visíveis no código. E muito obrigado, pessoal, pela grande oportunidade!




