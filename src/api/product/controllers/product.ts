/**
 * product controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::product.product', ({strapi})=>({
  productOwnCon: async (ctx) => {
    const {id} = ctx.request.params;
    console.log(ctx.header)
    console.log(id)
    return id
  },
  async createTest(ctx) {
  //   if(ctx.header.authorization === 'fake token'){
  //    return ctx.badRequest('invalid token');

  //   }
  //  console.log(ctx.header.authorization)
   ctx.query.populate = '*';
   const {data, meta} = await super.create(ctx);
   return {data, meta};
  },
}));
