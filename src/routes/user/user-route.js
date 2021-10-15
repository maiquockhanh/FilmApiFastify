const HttpStatus = require("http-status-codes/index");
const {
  createOne,
  signIn,
  getInfo,
  addFilm,
  viewFilm,
} = require("../../controllers/user-controller");
const schema = require("../schema/user-schema");

const userRoute = (fastify, opts, next) => {
  const routes = [
    {
      method: "POST",
      url: "/user/create",
      schema: schema.createOne,
      handler: createOne,
    },
    {
      method: "POST",
      url: "/signin",
      schema: schema.signIn,
      handler: signIn,
    },
    {
      method: "POST",
      url: "/user/info",
      schema: schema.token,
      handler: getInfo,
    },
    {
      method: "POST",
      url: "/user/film/add",
      schema: schema.addFilm,
      handler: addFilm,
    },
    {
      method: "POST",
      url: "/user/film",
      schema: schema.token,
      handler: viewFilm,
    },
  ];

  routes.forEach((route) => fastify.route(route));
  next();
};

module.exports = { userRoute };
