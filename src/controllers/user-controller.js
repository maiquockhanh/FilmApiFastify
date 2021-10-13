const HttpStatus = require("http-status-codes/index");

const findOne = async (request, reply) => {
  try {
    const requestParams = {
      ...request.body,
      ...request.query,
      ...request.params,
    };

    reply.code(HttpStatus.OK).send(`GETTING USER ID ${requestParams.id}`);
  } catch (e) {
    request.log.error(e);
  }
};

const createOne = async (request, reply) => {
  try {
    reply.code(HttpStatus.CREATED).send(request.body);
  } catch (e) {
    request.log.error(e);
  }
};

module.exports = { findOne, createOne };
