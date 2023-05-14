FROM node:18-alpine

RUN npm i -g pnpm

WORKDIR /app

COPY package.json .
RUN pnpm install

COPY . .

EXPOSE 5173

CMD ["pnpm", "run", "dev"]