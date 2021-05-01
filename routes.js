const nextRoutes = require('next-routes');
const routes = module.exports = nextRoutes();

routes.add('sketches', '/s/:sketchId', 'p5page');
routes.add('invalid_P5Page', '/p5page', '404');