/**
 * A set of functions called "actions" for `productOwnCon`
 */

export default {
  // exampleAction: async (ctx, next) => {
  //   try {
  //     ctx.body = 'ok';
  //   } catch (err) {
  //     ctx.body = err;
  //   }
  // }
  productOwnCon: async(ctx, next) => {
    const {id} = ctx.request.params;
    console.log(ctx.header)
    console.log(id)
    return id
  }
};
