module.exports = {
  apps: [
    {
      name: "universal-telecom",
      script: "npm",
      args: "start",
      cwd: "/var/www/universal-telecom",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      error_file: "/var/log/pm2/universal-telecom-error.log",
      out_file: "/var/log/pm2/universal-telecom-out.log",
      log_file: "/var/log/pm2/universal-telecom.log",
    },
  ],
}
