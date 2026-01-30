# Deployment Guide

This guide describes how to install and configure the Onfees application on a Linux server (Ubuntu/Debian recommended).

## Prerequisites

- **Node.js**: Version 18.17.0 or later.
- **Git**: For cloning the repository.
- **PM2** (Process Manager): Recommended for keeping the app running.
- **Nginx** (Reverse Proxy): Recommended for serving the app on port 80/443.

## 1. Sever Setup

Update your server packages:
```bash
sudo apt update && sudo apt upgrade -y
```

Install Node.js (using NodeSource setup):
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

Install Git and PM2:
```bash
sudo apt install git -y
sudo npm install -g pm2
```

## 2. Installation

Clone the repository:
```bash
git clone <your-repository-url>
cd onfees-redesign
```

Install dependencies:
```bash
npm install
```

## 3. Configuration

Create a production environment file:
```bash
cp .env.local.example .env.local
```

Edit the `.env.local` file using nano or vim:
```bash
nano .env.local
```

**Required Environment Variables:**
- `RESEND_API_KEY`: Your API key from Resend for emails.
- `CONTACT_EMAIL`: The email address where contact form submissions should be sent.
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`: Your Google reCAPTCHA v3/v2 Site Key.
- `RECAPTCHA_SECRET_KEY`: Your Google reCAPTCHA v3/v2 Secret Key.

## 4. Build for Production

Build the Next.js application:
```bash
npm run build
```

## 5. Running the Application

Start the application using PM2 on port 3000:
```bash
pm2 start npm --name "onfees-web" -- start
```

Save the PM2 process list so it restarts on reboot:
```bash
pm2 save
pm2 startup
```

## 6. Nginx Configuration (Reverse Proxy)

Install Nginx:
```bash
sudo apt install nginx -y
```

Create a new configuration block:
```bash
sudo nano /etc/nginx/sites-available/onfees
```

Paste the following configuration (replace `yourdomain.com` with your actual domain):

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site and restart Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/onfees /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## 7. SSL Certificate (Optional but Recommended)

Install Certbot:
```bash
sudo apt install certbot python3-certbot-nginx -y
```

Obtain an SSL certificate:
```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```
