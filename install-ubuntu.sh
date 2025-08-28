#!/bin/bash

echo "🚀 Instalando Universal Telecom en Ubuntu 22.04..."

# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar dependencias básicas
sudo apt install -y curl wget git unzip

# Instalar Node.js 18 LTS
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verificar instalación
echo "Node.js version: $(node --version)"
echo "NPM version: $(npm --version)"

# Instalar PM2 para gestión de procesos
sudo npm install -g pm2

# Instalar Nginx
sudo apt install -y nginx

# Habilitar servicios
sudo systemctl enable nginx
sudo systemctl start nginx

# Crear directorio para la aplicación
sudo mkdir -p /var/www/universal-telecom
sudo chown -R $USER:$USER /var/www/universal-telecom

echo "✅ Dependencias instaladas correctamente"
echo "📁 Directorio creado: /var/www/universal-telecom"
echo "🔄 Ahora sube los archivos del proyecto a este directorio"
