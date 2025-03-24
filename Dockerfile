FROM node:18
WORKDIR /app
COPY . .
RUN npm install axios dotenv
CMD ["node", "monitor.js"]
