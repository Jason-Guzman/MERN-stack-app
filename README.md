# MERN-stack-app

 For this project I built a dynamic single-page application from the ground up, using the MERN stack (MongoDB, Express, React, and Node.js). I was also able to implement an authentication system through API's routes/controllers I built from scratch.

 For the deployment phase of the project, I utilized Terraform Infrastructure as Code (IaC). Allowing me to efficiently provision and manage the resources needed to host the application. As well as ensuring a scalable and maintainable infrastructure that could adapt to changing requirements.

 Checkout my blog post on my experience working on this project

<hr>

## Technology Implementations

- MongoDB
- Express.Js
- React
- Node.Js
- Vite
- Javascript Web-Tokens
- Nginx
- Redux
- Terraform



## ⚙️ Features

- Backend API using Express and MongoDB.
- Implemented API routes for authentication, logging out, registration, user profiles, and profile updates.
- JWT authentication with secure storage in HTTP-only cookies.
- Secured API routes and endpoints.
- Utilizing the React Bootstrap UI library for the user interface.
- Provisioned entire infrastructure through Terraform.
- AWS Terraform S3 and DynamoDB Remote backend


## ⚒️ Local Building from source

### Install Backend Dependencies

```
npm install
```

### Install Frontend Dependencies

```
cd Frontend
npm install
```

## 🏃 Running Application

```

# Run Frontend (:3000) & Backend (:5000)
npm run dev

# Run Backend Only
npm run server
```

## 🚀 Deploying Application

```
# Create Frontend Production Build
cd frontend
npm run build
```
