const HttpStatus = require("http-status-codes/index");
const userService = require("../services/user-service");

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
    const checkUser = await userService.findByUser(request.body.email);
    if (checkUser)
      return reply.send({ success: false, msg: "Email has already exist !" });
    console.log(checkUser);

    const document = await userService.createOne(request.body);
    reply.code(HttpStatus.CREATED).send(document);
  } catch (e) {
    request.log.error(e);
  }
};

const signIn = async (request, reply) => {
  try {
    const document = await userService.createOne(request.body);
    reply.code(HttpStatus.CREATED).send(document);
  } catch (e) {
    request.log.error(e);
  }
};

module.exports = { findOne, createOne, signIn };
