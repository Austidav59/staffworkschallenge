import { getFeaturedRecipes } from '../models/recipeModel.js';

export default async function (fastify, options) {
  // Home page route
  fastify.get('/', async (request, reply) => {
    const featuredRecipes = getFeaturedRecipes();
    
    return reply.view('pages/home', { 
      title: 'Recipe Book',
      message: 'Welcome to our Recipe Collection',
      featuredRecipes,
      requestTime: request.requestTime
    });
  });
} 