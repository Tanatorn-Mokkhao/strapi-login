module.exports = {
  routes: [
    {
      method: "POST",
      path: "/articles/create",
      handler: "article.create"
    },
  ]
}