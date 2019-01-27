FROM node:10.15.0-jessie

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 8000

CMD ["npm", "run", "develop", "--", "-H", "0.0.0.0"]