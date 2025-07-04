# Estágio de build
FROM node:20-alpine AS builder

WORKDIR /app

# Instalar dependências necessárias para o bcrypt
RUN apk add --no-cache python3 make g++

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o código fonte
COPY . .

# Estágio de produção
FROM node:20-alpine

WORKDIR /app

# Instalar dependências necessárias para o bcrypt
RUN apk add --no-cache python3 make g++

# Copiar apenas os arquivos necessários do estágio de build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/server.js ./
COPY --from=builder /app/config ./config
COPY --from=builder /app/controllers ./controllers
COPY --from=builder /app/middlewares ./middlewares
COPY --from=builder /app/routes ./routes
COPY --from=builder /app/templates ./templates

# Expor a porta que a aplicação usa
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "server.js"]
