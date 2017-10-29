import koaBody from 'koa-body'

export const addValidate = app => {
  require('koa-validate')(app);
}

export const addBody = app => {
  app.use(koaBody({multipart:true , formidable:{keepExtensions:true}}))
}
