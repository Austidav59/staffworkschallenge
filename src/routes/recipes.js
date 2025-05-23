import { 
  getAllRecipes, 
  getRecipeById
} from '../models/recipeModel.js';

export default async function (fastify, options) {
  // Get all recipes
  fastify.get('/', async (request, reply) => {
    const recipes = getAllRecipes();
    
    return reply.view('pages/recipes', { 
      title: 'All Recipes',
      recipes,
      requestTime: request.requestTime
    });
  });
  
  // Get recipe details by ID
  fastify.get('/:id', async (request, reply) => {
    const { id } = request.params;
    const recipe = getRecipeById(id);
    
    if (!recipe) {
      return reply.code(404).view('pages/error', { 
        title: 'Recipe Not Found',
        message: `Recipe with ID ${id} not found`,
        requestTime: request.requestTime
      });
    }
    
    return reply.view('pages/recipe-detail', { 
      title: recipe.title,
      recipe,
      requestTime: request.requestTime
    });
  });
} 