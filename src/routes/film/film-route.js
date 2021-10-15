const { findAll } = require("../../controllers/film-controller");

const filmRoute = (fastify, opts, next) => {
  const routes = [
    {
      method: "GET",
      url: "/film/all",
      handler: findAll,
    },
  ];

  routes.forEach((route) => fastify.route(route));
  next();
};

module.exports = { filmRoute };
