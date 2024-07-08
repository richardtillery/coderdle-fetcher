FROM node:22

COPY package.json index.mjs node_modules .
RUN npm install

ENV HOST="0.0.0.0"

CMD ["node", "./index.mjs"]
