#!/bin/bash

# Script de despliegue rápido para servidores Linux
echo "🚀 Iniciando despliegue de Universal Telecom..."

# Verificar si Docker está instalado
if ! command -v docker &> /dev/null; then
    echo "❌ Docker no está instalado. Instalando..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    sudo usermod -aG docker $USER
fi

# Verificar si Docker Compose está instalado
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose no está instalado. Instalando..."
    sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
fi

# Construir y ejecutar la aplicación
echo "🔨 Construyendo la aplicación..."
docker-compose build

echo "🚀 Iniciando servicios..."
docker-compose up -d

echo "✅ Despliegue completado!"
echo "🌐 La aplicación está disponible en http://localhost"
echo "📊 Para ver los logs: docker-compose logs -f"
echo "🛑 Para detener: docker-compose down"
