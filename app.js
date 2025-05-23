import Fastify from 'fastify';
import fastifyView from '@fastify/view';
import fastifyStatic from '@fastify/static';
import fastifyFormBody from '@fastify/formbody';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import ejs from 'ejs';

// Import routes
import homeRoutes from './src/routes/home.js';
import recipeRoutes from './src/routes/recipes.js';
import aboutRoutes from './src/routes/about.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fastify = Fastify({
  logger: true
});

// Register plugins
fastify.register(fastifyFormBody);

fastify.register(fastifyStatic, {
  root: join(__dirname, 'public'),
  prefix: '/public/'
});

fastify.register(fastifyView, {
  engine: {
    ejs: ejs
  },
  root: join(__dirname, 'src/views'),
  viewExt: 'ejs'
});

// Middleware for request timing
fastify.addHook('onRequest', async (request, reply) => {
  request.requestTime = new Date();
  console.log(`${request.method} ${request.url} - ${request.requestTime}`);
});

// Middleware for basic authentication (for demo purposes)
fastify.addHook('onRequest', async (request, reply) => {
  // This is just for demo purposes - not real auth
  request.user = {
    isAuthenticated: true,
    name: 'Guest User'
  };
});

// Register routes
fastify.register(homeRoutes, { prefix: '/' });
fastify.register(recipeRoutes, { prefix: '/recipes' });
fastify.register(aboutRoutes, { prefix: '/about' });

// Start the server
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    console.log(`Server is running at http://localhost:3000`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start(); 