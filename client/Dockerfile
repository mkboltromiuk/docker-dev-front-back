FROM node:20
WORKDIR /app
# Skopiowanie plików package.json i package-lock.json
# Kopiujemy package.json i package-lock.json, aby zainstalować zależności
COPY package*.json ./


# Instalujemy zależności
RUN npm install

# Kopiujemy pozostałe pliki projektu

COPY . .

# Ekspozycja portu, na którym działa aplikacja
EXPOSE 5173

# Uruchomienie aplikacji
CMD ["npm", "run", "dev"]