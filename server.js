import Koa from "koa";
import http from "http";
import bodyParser from "koa-body";
import R from 'ramda';
import { resolve } from "path";

import conf from "./config";

const app = new Koa();

// const views = require('koa-views');
// app.use(views(__dirname + '/views', {
//     map: {
//         html: 'nunjucks'
//     }
// }));

const r = path => resolve(__dirname, path)
const MIDDLEWARE = ['response', 'general', 'router']

const useMiddleware = (app) => {
  // 中间件的个数不定，通过 Ramda 的特性，从右往左进行函数组合，右侧函数的返回结果总是左侧函数的输入参数
  // R.map(console.log)([1, 2, 3])
  // MIDDLEWARE 数组交给了 R.map
  // 分别拿到的单个数组中的值，我们可以通过 R.compose 再次进行组合。
  return R.map(R.compose(
    R.map(i => i(app)),
    require,
    i => `${r('./middleware')}/${i}`)
  )
}

const start = async () => { 
    await useMiddleware(app)(MIDDLEWARE)
  
    app.listen(conf.port, conf.host)
    console.log('Server listening on ' + conf.host + ':' + conf.port) // eslint-disable-line no-console
  };
  
  start()
  
