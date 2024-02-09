FROM node
WORKDIR /application
COPY package.json .
COPY package-lock.json .
RUN npm i
COPY . .
EXPOSE 4000
CMD ["node", "app.js"]