const HttpStatus = require("http-status-codes/index");
const { findOne, createOne } = require("../../controllers/user-controller");

const studentRoutes = (fastify, opts, next) => {
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
  ];

  routes.forEach((route) => fastify.route(route));
  next();
};

module.exports = { studentRoutes };
