
module.exports = {
  name: "example",
  version: 3,

  actions: {
    hello: {
      rest: { method: 'GET', path: '/hello/:name' },
      handler(ctx) {
        return {
          data: 'Welcome 33' + ctx.params.name
        }
      }
    },
    me: {
      rest: { method: 'GET', path: '/me' },
      async handler(ctx) {
        return ctx.meta.user
      }
    },
    space_users: {
      rest: { method: 'GET', path: '/space_users' },
      async handler(ctx) {
        return await this.broker.call('@space_users.find', {fields: ['name']})
      }
    },
  }
}