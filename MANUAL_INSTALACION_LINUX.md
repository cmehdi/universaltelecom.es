# Manual de Instalación - Universal Telecom Website
## Instalación y Despliegue en Linux

### 📋 Requisitos del Sistema

#### Requisitos Mínimos:
- **Sistema Operativo**: Ubuntu 20.04+ / CentOS 8+ / Debian 11+
- **RAM**: 2GB mínimo (4GB recomendado)
- **Espacio en Disco**: 1GB libre
- **Conexión a Internet**: Para descargar dependencias

#### Software Necesario:
- **Node.js**: v18.0.0 o superior
- **npm**: v8.0.0 o superior
- **Git**: Para clonar el repositorio
- **Nginx**: Para servidor web (opcional)
- **PM2**: Para gestión de procesos (opcional)

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
    "dev": "python3 -m http.server 8000",
    "serve": "npx http-server -p 8000 -c-1",
    "build": "echo 'No build process needed for static site'",
    "deploy": "rsync -avz --delete ./ user@server:/var/www/html/"
  },
  "keywords": ["telecom", "business", "communications"],
  "author": "Universal Telecom",
  "license": "MIT",
  "devDependencies": {
    "http-server": "^14.1.1"
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
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 8000;

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;
  
  if (filePath === './') {
    filePath = './index.html';
  }
  
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = mimeTypes[extname] || 'application/octet-stream';
  
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404);
        res.end('Página no encontrada');
      } else {
        res.writeHead(500);
        res.end('Error del servidor: ' + error.code);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
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
sudo yum install nginx -y
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

    # Configuración de compresión
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/atom+xml image/svg+xml;

    # Configuración de caché
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Manejo de rutas para SPA
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Configuración de seguridad
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
}
EOF

# Habilitar el sitio
sudo ln -s /etc/nginx/sites-available/universal-telecom /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default

# Crear directorio web
sudo mkdir -p /var/www/universal-telecom
sudo chown -R $USER:$USER /var/www/universal-telecom

# Copiar archivos
cp -r ./* /var/www/universal-telecom/

# Verificar configuración y reiniciar
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx
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
# Crear directorio de logs
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

#### Monitoreo con htop:
\`\`\`bash
sudo apt install htop -y
htop
\`\`\`

---

### 🚀 Optimizaciones de Rendimiento

#### 1. Configurar Caché del Navegador:
```nginx
# En la configuración de Nginx
location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
