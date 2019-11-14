# Define el SO que tendra nuestro contenedor
FROM ubuntu:trusty
MAINTAINER me

#Instala las dependencias necesarias para node.js
RUN apt-get update && \
    apt-get -y install curl && \
    curl -sL https://deb.nodesource.com/setup_6.x | sudo bash - && \
    apt-get -y install python build-essential nodejs
    
#Directorio de trabajo de nuestra imagen
WORKDIR /usr/src/app

#Lleva todos los archivos al directorio de trabajo
COPY . /usr/src/app

#Ejecuta npm para instalar todas las dependencias del proyecto
RUN npm install

#Expone el puerto por donde se comunica mi contenedor
EXPOSE 8080

#Define que ejecuta la linea de comando, en este caso ejecuta nuestra
#aplicacion servidor.js
CMD ["node", "tareas.js"]

