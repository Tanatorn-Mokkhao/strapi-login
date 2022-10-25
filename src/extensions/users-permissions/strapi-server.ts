export default (plugin) => {
  plugin.controllers.auth.callback = (ctx) => {
    console.log(ctx)
    return
  }

  plugin.routes['content-api'].routes.push({
    method: 'POST',
    path: '/auth/cognito/callback',
    handler: 'auth.callback',
    config: {
      prefix: ''
    }
  })

  return plugin
};