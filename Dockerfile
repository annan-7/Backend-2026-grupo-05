FROM node:24-alpine
# working directory but inside my backend container
WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY app ./app

ENV NODE_ENV=production
#Obs : Port 3000 is for the backend server, you can change it if you want to use another port.
EXPOSE 3000

CMD ["node", "app/index.js"]