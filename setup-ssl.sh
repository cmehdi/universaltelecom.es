#!/bin/bash

echo "🔒 Configurando SSL con Let's Encrypt..."

# Instalar Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtener certificado SSL (reemplaza tu-dominio.com)
sudo certbot --nginx -d tu-dominio.com -d www.tu-dominio.com

# Configurar renovación automática
sudo crontab -l | { cat; echo "0 12 * * * /usr/bin/certbot renew --quiet"; } | sudo crontab -

echo "✅ SSL configurado correctamente"
echo "🔄 Los certificados se renovarán automáticamente"
