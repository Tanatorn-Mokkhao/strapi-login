"use strict";
/**
 * article controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::article.article', ({ strapi }) => ({
    async create(ctx) {
        const { body } = ctx.request;
        const articleContentsList = [];
        const articleEntity = await super.create({
            data: {
                title: body.title,
                publishedAt: new Date()
            }
        });
        for (let articleContent of body.articleContents) {
            const entity = await strapi.service('api::article-content.article-content').create({
                data: {
                    articleContent: articleContent,
                    publishedAt: new Date()
                }
            });
            articleContentsList.push(entity.id);
        }
        // const entity = await strapi.service('api::article-content.article-content').create({
        //   data: {
        //     articleContent: 'test10',
        //     publishedAt: new Date()
        //   }
        // });
        // console.log(entity)
        return articleContentsList;
    }
}));
