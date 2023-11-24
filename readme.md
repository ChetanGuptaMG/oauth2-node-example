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