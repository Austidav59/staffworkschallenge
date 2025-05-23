// Recipe Model - Contains methods to access recipe data
import { recipes, comments } from '../data/mockData.js';

// Model methods
export const getAllRecipes = () => {
  return [...recipes];
};

export const getRecipeById = (id) => {
  return recipes.find(recipe => recipe.id === parseInt(id)) || null;
};

export const getFeaturedRecipes = () => {
  return recipes.filter(recipe => recipe.featured).slice(0, 3);
};

export const getRecipesByCategory = (category) => {
  return recipes.filter(recipe => recipe.category.toLowerCase() === category.toLowerCase());
};

export const addComment = (recipeId, comment) => {
  const newComment = {
    id: comments.length + 1,
    recipeId: parseInt(recipeId),
    ...comment,
    date: new Date().toISOString()
  };
  
  comments.push(newComment);
  return newComment;
};

export const getCommentsByRecipeId = (recipeId) => {
  return comments.filter(comment => comment.recipeId === parseInt(recipeId));
}; 