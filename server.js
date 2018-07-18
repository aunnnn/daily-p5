const next = require('next')
const routes = require('./routes')
const app = next({ dev: process.env.NODE_ENV === 'development' })
const handler = routes.getRequestHandler(app)
// const handler = routes.getRequestHandler(app, ({req,res, route, query}) => {
//   if (req.url.startsWith('/sketchesCount')) {
//     res.setHeader('Content-Type', 'application/json;charset=utf-8')
//     // const fs = require('fs')
//     // const count = fs.readdirSync('./sketches').length - 1
//     return res.end(JSON.stringify({
//       sketchesCount: process.env.SKETCHES_COUNT,
//     }))
//   } else {
//     app.render(req, res, route.page, query)
//   }
// })

const { createServer } = require('http')

app.prepare().then(() => {
  createServer(handler).listen(process.env.PORT || 3000);
});
