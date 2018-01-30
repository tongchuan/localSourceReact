const Koa = require('koa')
const router = require('koa-route')
const static = require('koa-static')
const views = require('koa-views')
const app = new Koa()
app.use(views(__dirname+'/dist', { map: {html: 'nunjucks' }}))
app.use(static(__dirname+'/dist',
  {
    proxy: '/metadb'
  }
))
// const router = Router();
app.use(async function (ctx, next) {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// app.use(router.get('/metadb/', async (ctx) => {
//   // ctx.body = 'body'
//   await ctx.render('index.html')
// }))

// app.use(router.get('*', ctx => {
//   ctx.body = 'Page is 404, please access /metadb'
// }))

app.on('error', function(err, ctx){
  console.log(err)
})
app.listen(3001)