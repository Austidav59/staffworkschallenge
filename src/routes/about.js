export default async function (fastify, options) {
  // About page route
  fastify.get('/', async (request, reply) => {
    return reply.view('pages/about', { 
      title: 'About Us',
      message: 'Learn more about our recipe collection',
      requestTime: request.requestTime
    });
  });
} 