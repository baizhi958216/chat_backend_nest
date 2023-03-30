FROM node:18.15.0

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN npm config set registry https://registry.npmmirror.com
RUN npm i -g pnpm
RUN pnpm config set registry https://registry.npmmirror.com
RUN pnpm i

EXPOSE 3000

RUN pnpm run build