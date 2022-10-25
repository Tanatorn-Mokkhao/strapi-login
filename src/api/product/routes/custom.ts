module.exports = {
  routes: [
    {
      method: "GET",
      path: "/products/productOwnCon/:id",
      handler: "product.productOwnCon"
    },
    {
      method: "POST",
      path: "/products/createTest",
      handler: "product.createTest",
      config: {
        middlewares: [
          (ctx, next) => {
            console.log('this is middle ware', ctx.header)
            if(ctx.header.authorization === 'fake token'){
              return ctx.badRequest('invalid token');
            }
            return next();
          }
        ]
      }
    },
  ]
}