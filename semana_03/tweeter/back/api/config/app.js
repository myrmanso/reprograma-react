const restify = require('restify')
const consign = require('../node_modules/consign')
const errors = require('restify-errors')
const app = restify.createServer()

require('dotenv').config()

const corsMiddleware = require('restify-cors-middleware')

const cors = corsMiddleware({
  origins: ['*'],
  allowHeaders: ['X-AUTH-TOKEN', 'Access-Control-Allow-Origin'],
  exposeHeaders: ['X-AUTH-TOKEN', 'Access-Control-Allow-Origin']
})

app.pre(cors.preflight)
app.use(cors.actual)


app.use(restify.plugins.bodyParser({ mapParams: false }));
app.use(restify.plugins.queryParser());

// restify.CORS.ALLOW_HEADERS.push('authorization');
console.log(restify.plugins.CORS)
// app.pre(restify.plugins.CORS());
// app.use(restify.fullResponse());

// Auto-load Everything 
consign()
  .include('infra')
  .then('models')
  .then('controllers')
  .then('middlewares')
  .then('routes')
  .into(app)
  

module.exports = app