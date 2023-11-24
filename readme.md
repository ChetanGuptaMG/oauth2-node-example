# OAuth2-Node-Example

Welcome to OAuth2-Node-Example, a project that demonstrates the implementation of OAuth 2.0 authentication with Node.js. This project showcases my expertise in building secure and scalable web applications, utilizing technologies such as Node.js, Docker, Nginx, and integrating with the Google API Console for secure authentication.

## Introduction

OAuth2-Node-Example highlights the following key aspects:

### OAuth 2.0 Implementation
The project incorporates OAuth 2.0 for secure authentication and authorization flows in a Node.js environment. Explore the code to understand how OAuth 2.0 enhances user experience and security.

### Dockerization
The application is containerized using Docker, providing a consistent and reproducible environment for development, testing, and production deployment. Docker enables seamless setup and ensures application consistency across different environments.

### Nginx Configuration
Nginx is configured as a reverse proxy, efficiently handling HTTP requests and forwarding them to the Node.js application. This setup optimizes application performance and achieves a robust server configuration.

### Google API Console Integration
The project seamlessly integrates with the Google API Console for managing OAuth 2.0 credentials, setting up projects, and configuring authorized redirect URIs. This ensures secure and authorized access to Google APIs within the application.

Explore the OAuth2-Node-Example project to gain insights into these technologies and witness their synergistic implementation for building a secure and modern web application.


## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed


### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/OAuth2-Node-Example.git

# Navigate to the project directory
cd OAuth2-Node-Example

# Install dependencies
npm install

```
## Environment Variables

Create a .env file in the project root with the following content:

env
```bash
CLIENT_ID=your_google_client_id
CLIENT_SECRET=your_google_client_secret
cookie_key1=1234567890
cookie_key2=12345
Replace your_google_client_id and your_google_client_secret with the corresponding values from your Google API Console project.
```


## Usage

Start the Application Locally
bash
# Start the Node.js application
npm start
Visit http://localhost:3000 in your browser.

Build and Run with Docker
bash
Copy code
# Build the Docker image
docker build -t oauth2-node-example .

# Run the Docker container
docker run -d -p 3000:3000 --env-file .env oauth2-node-example
Visit http://localhost:3000 in your browser.





## 1. Create Free AWS Account
Create free AWS Account at https://aws.amazon.com/

## 2. Create and Lauch an EC2 instance and SSH into machine
I would be creating a t2.medium ubuntu machine for this demo.

## 3. Install Node and NPM
```
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install nodejs

node --version
```

## 4. Clone your project from Github
```
git clone https://github.com/piyushgargdev-01/short-url-nodejs
```

## 5. Install dependencies and test app
```
sudo npm i pm2 -g
pm2 start index

# Other pm2 commands
pm2 show app
pm2 status
pm2 restart app
pm2 stop app
pm2 logs (Show log stream)
pm2 flush (Clear logs)

# To make sure app starts when reboot
pm2 startup ubuntu
```

## 6. Setup Firewall
```
sudo ufw enable
sudo ufw status
sudo ufw allow ssh (Port 22)
sudo ufw allow http (Port 80)
sudo ufw allow https (Port 443)
```

## 7. Install NGINX and configure
```
sudo apt install nginx

sudo nano /etc/nginx/sites-available/default
```
Add the following to the location part of the server block
```
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:8001; #whatever port your app runs on
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
```
```
# Check NGINX config
sudo nginx -t

# Restart NGINX
sudo nginx -s reload
```

## 8. Add SSL with LetsEncrypt
```
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Only valid for 90 days, test the renewal process with
certbot renew --dry-run
```
