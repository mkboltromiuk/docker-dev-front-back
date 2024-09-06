FROM node:20

WORKDIR /app

# Skopiuj plik package.json i package-lock.json (lub yarn.lock)
COPY package*.json ./

RUN npm install

# Skopiuj pozostałe pliki aplikacji
COPY . .

EXPOSE 3000

# Ustawienie komendy startowej
CMD ["node","server.js"]