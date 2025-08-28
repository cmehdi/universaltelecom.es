#!/bin/bash

echo "🚀 Desplegando Universal Telecom..."

# Navegar al directorio del proyecto
cd /var/www/universal-telecom

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

# Construir la aplicación
echo "🔨 Construyendo aplicación..."
npm run build

# Configurar PM2
echo "⚙️ Configurando PM2..."
pm2 delete universal-telecom 2>/dev/null || true
pm2 start npm --name "universal-telecom" -- start
pm2 save
pm2 startup

echo "✅ Aplicación desplegada correctamente"
echo "🌐 La aplicación está corriendo en el puerto 3000"
echo "📊 Para ver logs: pm2 logs universal-telecom"
echo "🔄 Para reiniciar: pm2 restart universal-telecom"
