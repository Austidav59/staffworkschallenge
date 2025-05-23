// Mock recipe data for the application
export const recipes = [
  {
    id: 1,
    title: 'Classic Spaghetti Carbonara',
    description: 'A traditional Italian pasta dish with eggs, cheese, bacon, and black pepper.',
    ingredients: [
      '350g spaghetti',
      '150g pancetta or bacon, diced',
      '2 large eggs',
      '1 egg yolk',
      '50g Pecorino Romano cheese, grated',
      '50g Parmesan cheese, grated',
      'Freshly ground black pepper',
      'Salt to taste'
    ],
    instructions: [
      'Bring a large pot of salted water to boil and cook spaghetti according to package directions.',
      'While pasta cooks, heat a large skillet over medium heat and cook pancetta until crispy.',
      'In a bowl, whisk together eggs, egg yolk, and grated cheeses.',
      'Drain pasta, reserving about 1/4 cup of pasta water.',
      'Working quickly, add hot pasta to the skillet with pancetta, remove from heat.',
      'Add the egg and cheese mixture, tossing quickly to coat pasta without scrambling eggs.',
      'Add a splash of reserved pasta water to create a creamy sauce.',
      'Season with freshly ground black pepper and serve immediately.'
    ],
    prepTime: '10 minutes',
    cookTime: '15 minutes',
    servings: 4,
    category: 'Main Course',
    difficulty: 'Intermediate',
    featured: true,
    image: 'carbonara.jpg'
  },
  {
    id: 2,
    title: 'Avocado Toast',
    description: 'Simple and nutritious breakfast with mashed avocado on toasted bread.',
    ingredients: [
      '2 slices of whole grain bread',
      '1 ripe avocado',
      '1/2 lemon, juiced',
      'Salt and pepper to taste',
      'Red pepper flakes (optional)',
      '2 eggs (optional)'
    ],
    instructions: [
      'Toast the bread until golden and firm.',
      'Cut the avocado in half, remove the pit, and scoop the flesh into a bowl.',
      'Add lemon juice, salt, and pepper to the avocado and mash with a fork.',
      'Spread the mashed avocado on the toast.',
      'Top with red pepper flakes if desired.',
      'For an extra protein boost, add a poached or fried egg on top.'
    ],
    prepTime: '5 minutes',
    cookTime: '5 minutes',
    servings: 2,
    category: 'Breakfast',
    difficulty: 'Easy',
    featured: false,
    image: 'avocado-toast.jpg'
  },
  {
    id: 3,
    title: 'Chocolate Chip Cookies',
    description: 'Classic homemade chocolate chip cookies that are soft, chewy, and delicious.',
    ingredients: [
      '250g all-purpose flour',
      '1/2 tsp baking soda',
      '1/2 tsp salt',
      '170g unsalted butter, melted',
      '200g brown sugar',
      '100g white sugar',
      '1 tbsp vanilla extract',
      '1 egg',
      '1 egg yolk',
      '200g semi-sweet chocolate chips'
    ],
    instructions: [
      'Preheat oven to 325°F (165°C). Line baking sheets with parchment paper.',
      'Sift together the flour, baking soda, and salt; set aside.',
      'In a medium bowl, cream together the melted butter, brown sugar, and white sugar until well blended.',
      'Beat in the vanilla, egg, and egg yolk until light and creamy.',
      'Mix in the sifted ingredients until just blended.',
      'Stir in the chocolate chips by hand.',
      'Drop cookie dough by large spoonfuls onto the prepared baking sheets.',
      'Bake for 15-17 minutes, or until the edges are lightly toasted.',
      'Cool on baking sheets for a few minutes before transferring to wire racks.'
    ],
    prepTime: '15 minutes',
    cookTime: '15 minutes',
    servings: 24,
    category: 'Dessert',
    difficulty: 'Easy',
    featured: true,
    image: 'chocolate-chip-cookies.jpg'
  },
  {
    id: 4,
    title: 'Greek Salad',
    description: 'Fresh and healthy Mediterranean salad with vegetables and feta cheese.',
    ingredients: [
      '1 cucumber, diced',
      '4 large tomatoes, diced',
      '1 red onion, thinly sliced',
      '1 green bell pepper, diced',
      '200g feta cheese, cubed',
      '100g kalamata olives',
      '2 tbsp extra virgin olive oil',
      '1 tbsp red wine vinegar',
      '1 tsp dried oregano',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Combine cucumber, tomatoes, onion, bell pepper, feta cheese, and olives in a large bowl.',
      'In a small bowl, whisk together olive oil, vinegar, oregano, salt, and pepper.',
      'Pour dressing over the salad and toss gently to combine.',
      'Serve immediately or refrigerate for up to 1 hour before serving.'
    ],
    prepTime: '15 minutes',
    cookTime: '0 minutes',
    servings: 4,
    category: 'Salad',
    difficulty: 'Easy',
    featured: false,
    image: 'greek-salad.jpg'
  }
];

// Comments for recipes
export const comments = [
  {
    id: 1,
    recipeId: 1,
    author: 'Julie',
    text: 'Delicious! My family loved it.',
    date: '2023-04-15'
  },
  {
    id: 2,
    recipeId: 1,
    author: 'Marco',
    text: 'Very authentic recipe. I would use guanciale instead of pancetta for even more flavor.',
    date: '2023-05-02'
  },
  {
    id: 3,
    recipeId: 3,
    author: 'Sarah',
    text: 'Best cookie recipe ever! So chewy and perfect.',
    date: '2023-03-22'
  }
]; 