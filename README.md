MindTrack
MindTrack é uma aplicação web voltada para suporte emocional e orientação psicológica, utilizando um chatbot interativo e questionários personalizados para ajudar os usuários a refletirem sobre suas questões emocionais.

Funcionalidades
Chatbot Athena: Um assistente virtual que oferece suporte emocional e orientação psicológica.
Cadastro e Login: Sistema de autenticação para usuários.
Questionário Inicial: Personalização da experiência com base nas respostas do usuário.
Pontuação e Nível: Avaliação do bem-estar emocional do usuário com base nas respostas do questionário.
Pré-requisitos
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

Node.js (versão 16 ou superior)
Git
Um banco de dados PostgreSQL configurado
Instalação
Siga os passos abaixo para baixar e configurar o projeto:

Clone o repositório:

Instale as dependências:

Configure as variáveis de ambiente: Crie um arquivo .env na pasta config com as seguintes variáveis:

Configure o banco de dados: Certifique-se de que o banco de dados PostgreSQL está configurado e contém as tabelas necessárias para o funcionamento do sistema.

Inicie o servidor:

Acesse a aplicação: Abra o navegador e acesse http://localhost:3000.

Estrutura do Projeto
config: Configurações do banco de dados e da API Groq.
controllers: Lógica de negócio para autenticação, chat e questionários.
middlewares: Middleware para autenticação JWT.
routes: Rotas da API.
public: Arquivos estáticos (HTML, CSS, JS).
styles: Estilos CSS.
js: Scripts de interação com a API.
Uso
Cadastro:

Acesse register.html para criar uma conta.
Preencha os dados e envie o formulário.
Login:

Acesse login.html para entrar na aplicação.
Insira suas credenciais.
Questionário Inicial:

Após o login, responda ao questionário inicial para personalizar sua experiência.
Chatbot:

Acesse chat.html para interagir com o chatbot Athena.
Pontuação:

Acesse a página inicial para visualizar sua pontuação e nível emocional.
Tecnologias Utilizadas
Backend: Node.js, Express.js
Banco de Dados: PostgreSQL
Frontend: HTML, CSS, JavaScript
Autenticação: JWT
Chatbot: Groq SDK
Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

Licença
