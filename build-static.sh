#!/bin/bash

echo "🔨 Generando sitio estático para hosting compartido..."

# Instalar dependencias
npm install

# Generar sitio estático
npm run build

echo "✅ Sitio generado en la carpeta 'out/'"
echo "📁 Sube el contenido de 'out/' a tu hosting"
echo "🌐 Configura el dominio para apuntar a la carpeta subida"
