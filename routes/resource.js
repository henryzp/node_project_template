import { controller, get, post, log, required } from '../decorator/router'

@controller('/api')
export class Resource {
  @get('/testGet')
  @log
  @required({
    query: ['pageNo']
  })
  async testGet (ctx, next) {
    ctx.checkQuery('age').empty().gt(10,"too young!").lt(30,"to old!").toInt();
    if (ctx.errors) {
        ctx.body = ctx.errors;
        return;
    }
    ctx.body = 123
  }

  @post('/testPost')
  @log
  @required({
    body: ['a', 'b']
  })
  async testPost (ctx, next) {
    
    ctx.body = 123
  }


  @post('/testFile')
  @log
  @required({
    body: {
      fields: ['a', 'b'],
      files: ['c']
    }
  })
  async testFile (ctx, next) {
    
    ctx.body = 123
  }


}
