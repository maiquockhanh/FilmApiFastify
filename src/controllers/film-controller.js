const HttpStatus = require("http-status-codes/index");
const filmService = require("../services/film-service");

const findAll = async (request, reply) => {
  try {
    const document = await filmService.findAll({});
    reply.code(HttpStatus.OK).send({ success: true, film: document });
  } catch (e) {
    request.log.error(e);
  }
};

module.exports = { findAll };
