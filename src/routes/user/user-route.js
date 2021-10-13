const HttpStatus = require("http-status-codes/index");
const {
  findOne,
  createOne,
  signIn,
} = require("../../controllers/user-controller");

const userRoutes = (fastify, opts, next) => {
  const routes = [
    {
      method: "GET",
      url: "/user/:id",
      handler: findOne,
    },
    {
      method: "POST",
      url: "/user/create",
      handler: createOne,
    },
    {
      method: "POST",
      url: "/signin",
      handler: signIn,
    },
  ];

  routes.forEach((route) => fastify.route(route));
  next();
};

module.exports = { userRoutes };
