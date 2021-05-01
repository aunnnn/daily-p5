const next = require('next')
const routes = require('./routes')
const app = next({ dev: process.env.NODE_ENV === 'development' })
const handler = routes.getRequestHandler(app)
const { createServer } = require('http')

app.prepare().then(() => {
  createServer(handler).listen(process.env.PORT || 3000);
});
