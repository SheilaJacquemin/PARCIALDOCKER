# Usa la imagen base de Node.js
FROM node:14

# Copia la aplicación al contenedor
COPY . /app

# Establece el directorio de trabajo
WORKDIR /app

# Instala las dependencias
RUN npm install

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]
