# Manual de Instalación - Universal Telecom Website
## Instalación y Despliegue en Linux

### 📋 Requisitos del Sistema

#### Requisitos Previos:
- **Sistema Operativo**: Ubuntu 20.04+ / CentOS 8+ / Debian 10+
- **Memoria RAM**: Mínimo 1GB (Recomendado 2GB+)
- **Espacio en Disco**: Mínimo 2GB libres
- **Acceso**: Usuario con permisos sudo

---

### 🚀 Instalación Paso a Paso

#### 1. Actualizar el Sistema
\`\`\`bash
# Ubuntu/Debian
sudo apt update && sudo apt upgrade -y

# CentOS/RHEL
sudo yum update -y
# o para versiones más nuevas:
sudo dnf update -y
\`\`\`

#### 2. Instalar Node.js y npm

\`\`\`bash
# Método 1: Usando NodeSource (Recomendado)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Método 2: Usando snap (Ubuntu)
sudo snap install node --classic

# Método 3: Usando nvm (Recomendado para desarrollo)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18
\`\`\`

#### 3. Verificar Instalación
\`\`\`bash
node --version  # Debe mostrar v18.x.x o superior
npm --version   # Debe mostrar v8.x.x o superior
\`\`\`

#### 4. Instalar Git
\`\`\`bash
# Ubuntu/Debian
sudo apt install git -y

# CentOS/RHEL
sudo yum install git -y
\`\`\`

#### 5. Clonar o Descargar el Proyecto
\`\`\`bash
# Opción 1: Si tienes el proyecto en Git
git clone https://github.com/tu-usuario/universal-telecom-website.git
cd universal-telecom-website

# Opción 2: Si tienes los archivos localmente
mkdir universal-telecom-website
cd universal-telecom-website
# Copiar todos los archivos del proyecto aquí
\`\`\`

#### 6. Estructura de Archivos
Asegúrate de que tu proyecto tenga esta estructura:
\`\`\`
universal-telecom-website/
├── index.html
├── demo.html
├── prueba-gratis.html
├── contacto.html
├── en/
│   └── index.html
├── fr/
│   └── index.html
├── styles/
│   └── main.css
├── js/
│   └── main.js
├── images/
│   ├── logo.png
│   └── dashboard-inicio.png
├── package.json
└── server.js (opcional)
\`\`\`

---

### 🔧 Configuración del Proyecto

#### 1. Crear package.json
\`\`\`bash
cat > package.json << 'EOF'
{
  "name": "universal-telecom-website",
  "version": "1.0.0",
  "description": "Universal Telecom - Sitio web corporativo",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "compression": "^1.7.4",
    "helmet": "^7.0.0"
  }
}
EOF
\`\`\`

#### 2. Instalar Dependencias (Opcional)
\`\`\`bash
npm install
\`\`\`

#### 3. Crear Servidor Simple (Opcional)
\`\`\`bash
cat > server.js << 'EOF'
const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware de seguridad
app.use(helmet({
    contentSecurityPolicy: false // Permitir inline styles de Tailwind
}));

// Compresión
app.use(compression());

// Servir archivos estáticos
app.use(express.static('.', {
    maxAge: '1d',
    etag: true
}));

// Rutas para SPA
app.get('*', (req, res) => {
  // Si es una ruta de archivo, servir el archivo
  if (req.path.includes('.')) {
      res.status(404).send('Archivo no encontrado');
      return;
  }
  
  // Para rutas sin extensión, servir index.html
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📁 Sirviendo archivos desde: ${__dirname}`);
});
EOF
\`\`\`

---

### 🌐 Métodos de Despliegue

#### Método 1: Servidor HTTP Simple (Desarrollo)
\`\`\`bash
# Opción A: Usando Python
python3 -m http.server 8000

# Opción B: Usando Node.js http-server
npx http-server -p 8000 -c-1

# Opción C: Usando el servidor personalizado
npm start
\`\`\`

#### Método 2: Nginx (Producción)

##### Instalar Nginx:
\`\`\`bash
# Ubuntu/Debian
sudo apt install nginx -y

# CentOS/RHEL
sudo yum install epel-release -y
sudo yum install nginx -y

# Iniciar y habilitar Nginx
sudo systemctl start nginx
sudo systemctl enable nginx
\`\`\`

##### Configurar Nginx:
\`\`\`bash
# Crear configuración del sitio
sudo tee /etc/nginx/sites-available/universal-telecom << 'EOF'
server {
    listen 80;
    server_name tu-dominio.com www.tu-dominio.com;
    root /var/www/universal-telecom;
    index index.html;

    # Compresión
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Caché para archivos estáticos
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Manejo de rutas SPA
    location / {
        try_files $uri $uri/ $uri.html =404;
    }

    # Seguridad
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;

    # Logs
    access_log /var/log/nginx/universal-telecom.access.log;
    error_log /var/log/nginx/universal-telecom.error.log;
}
EOF

# Habilitar el sitio
sudo ln -s /etc/nginx/sites-available/universal-telecom /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
\`\`\`

#### Método 3: PM2 (Gestión de Procesos)
\`\`\`bash
# Instalar PM2
sudo npm install -g pm2

# Crear archivo de configuración
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'universal-telecom',
    script: 'server.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 8000
    }
  }]
};
EOF

# Iniciar aplicación
pm2 start ecosystem.config.js

# Configurar inicio automático
pm2 startup
pm2 save
\`\`\`

---

### 🔒 Configuración SSL (HTTPS)

#### Usando Certbot (Let's Encrypt):
\`\`\`bash
# Instalar Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obtener certificado SSL
sudo certbot --nginx -d tu-dominio.com -d www.tu-dominio.com

# Verificar renovación automática
sudo certbot renew --dry-run
\`\`\`

---

### 🛠️ Comandos de Mantenimiento

#### Verificar Estado del Servicio:
\`\`\`bash
# Nginx
sudo systemctl status nginx

# PM2
pm2 status

# Logs
sudo tail -f /var/log/nginx/access.log
pm2 logs universal-telecom
\`\`\`

#### Actualizar el Sitio:
\`\`\`bash
# Detener servicios
pm2 stop universal-telecom

# Actualizar archivos
git pull origin main
# o copiar nuevos archivos

# Reiniciar servicios
pm2 restart universal-telecom
sudo systemctl reload nginx
\`\`\`

#### Backup:
\`\`\`bash
# Crear backup
tar -czf backup-$(date +%Y%m%d).tar.gz /var/www/universal-telecom

# Restaurar backup
tar -xzf backup-20250130.tar.gz -C /
\`\`\`

---

### 🐛 Solución de Problemas

#### Problema: Puerto en uso
\`\`\`bash
# Verificar qué proceso usa el puerto
sudo lsof -i :8000
sudo netstat -tulpn | grep :8000

# Matar proceso
sudo kill -9 PID
\`\`\`

#### Problema: Permisos
\`\`\`bash
# Corregir permisos
sudo chown -R www-data:www-data /var/www/universal-telecom
sudo chmod -R 755 /var/www/universal-telecom
\`\`\`

#### Problema: Nginx no inicia
\`\`\`bash
# Verificar configuración
sudo nginx -t

# Ver logs de error
sudo tail -f /var/log/nginx/error.log

# Reiniciar servicio
sudo systemctl restart nginx
\`\`\`

---

### 📊 Monitoreo y Logs

#### Configurar Logs:
\`\`\`bash
# Crear directorio de logs personalizado
sudo mkdir -p /var/log/universal-telecom

# Configurar logrotate
sudo tee /etc/logrotate.d/universal-telecom << 'EOF'
/var/log/universal-telecom/*.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 644 www-data www-data
}
EOF
\`\`\`

#### Script de Monitoreo

\`\`\`bash
# Crear script de monitoreo
sudo tee /usr/local/bin/monitor-universal-telecom.sh << 'EOF'
#!/bin/bash

# Verificar si el servicio está corriendo
if ! pgrep -f "universal-telecom" > /dev/null; then
    echo "$(date): Servicio caído, reiniciando..." >> /var/log/universal-telecom/monitor.log
    pm2 restart universal-telecom
fi

# Verificar espacio en disco
DISK_USAGE=$(df /var/www/universal-telecom | tail -1 | awk '{print $5}' | sed 's/%//')
if [ $DISK_USAGE -gt 80 ]; then
    echo "$(date): Advertencia - Uso de disco alto: ${DISK_USAGE}%" >> /var/log/universal-telecom/monitor.log
fi
EOF

sudo chmod +x /usr/local/bin/monitor-universal-telecom.sh

# Añadir a crontab
echo "*/5 * * * * /usr/local/bin/monitor-universal-telecom.sh" | sudo crontab -
\`\`\`

---

### 🚀 Optimización de Rendimiento

#### 1. Configurar Caché

\`\`\`bash
# Para Nginx - añadir al server block
location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
    add_header Vary Accept-Encoding;
}
\`\`\`

#### 2. Habilitar Compresión

\`\`\`bash
# Nginx - añadir a http block
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
\`\`\`

#### 3. Optimizar Imágenes

\`\`\`bash
# Instalar herramientas de optimización
sudo apt install imagemagick optipng jpegoptim -y

# Optimizar imágenes
find ./images -name "*.png" -exec optipng {} \;
find ./images -name "*.jpg" -exec jpegoptim --max=85 {} \;
\`\`\`

---

### 📱 Configuración para Móviles

El sitio ya está optimizado para dispositivos móviles con:
- Diseño responsive con Tailwind CSS
- Meta viewport configurado
- Imágenes adaptativas
- Navegación móvil

---

### 🔧 Variables de Entorno

Crear archivo `.env` (opcional):

\`\`\`bash
cat > .env << 'EOF'
NODE_ENV=production
PORT=8000
DOMAIN=tu-dominio.com
SSL_ENABLED=true
ANALYTICS_ID=GA_MEASUREMENT_ID
EOF
\`\`\`

---

### ✅ Lista de Verificación Final

- [ ] Node.js y npm instalados
- [ ] Archivos del proyecto copiados
- [ ] Servidor web configurado (Nginx/Node.js)
- [ ] SSL configurado (si es producción)
- [ ] Permisos correctos establecidos
- [ ] Firewall configurado
- [ ] Backup configurado
- [ ] Monitoreo activo
- [ ] Logs configurados
- [ ] Dominio apuntando al servidor

---

## 📞 Soporte

Si encuentras problemas durante la instalación:

1. **Revisa los logs**: `sudo tail -f /var/log/nginx/error.log`
2. **Verifica la configuración**: `sudo nginx -t`
3. **Comprueba los permisos**: `ls -la /var/www/universal-telecom`
4. **Consulta el estado del servicio**: `sudo systemctl status nginx`

---

**¡Instalación Completada!** 🎉

Tu sitio web de Universal Telecom debería estar funcionando correctamente. Accede a `http://tu-servidor:8000` o `https://tu-dominio.com` para verificar que todo funciona correctamente.
\`\`\`

Ahora tienes un sitio web HTML completo y funcional con:

✅ **Páginas HTML completas** - Todas las páginas principales generadas
✅ **CSS personalizado** - Estilos optimizados con Tailwind CSS
✅ **JavaScript funcional** - Navegación, formularios, analytics
✅ **Manual de instalación** - Guía completa para Linux
✅ **Estructura lista para producción** - Fácil de copiar al servidor

**Para instalar:**

1. Copia todos los archivos a tu servidor Linux
2. Sigue el manual de instalación según tu preferencia (Node.js, Nginx o Apache)
3. Configura el dominio y SSL
4. ¡Listo para producción!

¿Necesitas que genere alguna página adicional o modifique algo específico?
