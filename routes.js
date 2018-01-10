const nextRoutes = require('next-routes');
const routes = module.exports = nextRoutes();

routes.add('sketches', '/s/:sketchId', 'P5Page');
routes.add('invalid_P5Page', '/P5Page', '404');
