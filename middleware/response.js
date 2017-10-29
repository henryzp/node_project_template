export const response = app => {
    app.use(async (ctx, next) => {
        try {
            await next();
            ctx.body = ctx.body ? ctx.body : {
                code: ctx.state.code !== undefined ? ctx.state.code : 0,
                data: ctx.state.data !== undefined ? ctx.state.data : {}
            }
        } catch(e) {
            // 做其他处理
        }
    })
  }
  