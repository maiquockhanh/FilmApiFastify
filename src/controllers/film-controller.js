const HttpStatus = require("http-status-codes/index");
const { findAllFilm } = require("../postgres/film-model");

const findAll = async (request, reply) => {
  try {
    const document = await findAllFilm();
    reply.code(HttpStatus.OK).send({ success: true, film: document });
  } catch (e) {
    request.log.error(e);
  }
};

module.exports = { findAll };
