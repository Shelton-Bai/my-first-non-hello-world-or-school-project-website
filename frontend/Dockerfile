FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV REACT_APP_API_URL=https://sheltonbai.com/springapi

EXPOSE 3000

CMD ["npm", "start"]