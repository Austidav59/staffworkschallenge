# Recipe Book App

A server-rendered web application built with Fastify and EJS templating engine, following MVC architecture.

## Features

- Browse a collection of recipes
- View detailed recipe information including ingredients and instructions
- Add comments to recipes
- Server-side rendering with EJS templates
- MVC architecture with routes (controllers), views, and models

## Project Structure

The project follows a structured MVC pattern:

- `/routes/` - Contains route controllers handling HTTP requests
- `/views/` - Contains EJS templates for rendering HTML
- `/models/` - Contains data models with mock data
- `/public/` - Static assets like CSS, JS, and images

## Requirements

- Node.js 14+
- npm or yarn

## Setup Instructions

1. Clone this repository

   ```
   git clone https://github.com/Austidav59/staffworkschallenge.git
   ```

2. Install dependencies

   ```
   npm install
   ```

3. Start the server

   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Core Technologies

- **Fastify**: A high-performance Node.js web framework
- **EJS**: Embedded JavaScript templating engine
- **ES Modules**: Modern JavaScript module system

## Design Decisions

- **MVC Architecture**: The application separates concerns into:

  - Models (data and business logic)
  - Views (presentation)
  - Controllers (request handling)

- **Middleware Usage**:

  - Request timing middleware to track request performance
