const HttpStatus = require("http-status-codes/index");
const userService = require("../services/user-service");
const filmService = require("../services/film-service");
const jwt = require("jsonwebtoken");

const createOne = async (request, reply) => {
  try {
    const checkUser = await userService.findByUser(request.body.email);
    if (checkUser)
      return reply
        .code(HttpStatus.BAD_REQUEST)
        .send({ success: false, msg: "Email has already existed" });
    console.log(checkUser);

    const document = await userService.createOne(request.body);
    reply.code(HttpStatus.CREATED).send({ success: true, user: document });
  } catch (e) {
    request.log.error(e);
  }
};

const signIn = async (request, reply) => {
  try {
    const checkUser = await userService.findByUser(request.body.email);
    console.log(request.body.email);
    if (!checkUser)
      return reply
        .code(HttpStatus.BAD_REQUEST)
        .send({ success: false, msg: "Email not found !" });

    if (request.body.password !== checkUser.password) {
      return reply
        .code(HttpStatus.BAD_REQUEST)
        .send({ success: false, msg: "Password is incorrect !" });
    }

    const token = jwt.sign({ userId: checkUser.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    reply.code(HttpStatus.OK).send({ success: true, token });
  } catch (e) {
    request.log.error(e);
  }
};

const getInfo = async (request, reply) => {
  try {
    const token = request.body.token;
    var userId;
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (decoded === undefined)
        return reply
          .code(HttpStatus.BAD_REQUEST)
          .send({ success: false, msg: "Token is invalid !" });

      userId = decoded.userId;
    });
    const checkUser = await userService.findOne(userId, (err, result) => {
      if (!result)
        return reply
          .code(HttpStatus.BAD_REQUEST)
          .send({ success: false, msg: "User not found!" });
    });

    const info = {
      email: checkUser.email,
      firstName: checkUser.firstName,
      middleName: checkUser.middleName,
      lastName: checkUser.lastName,
    };

    reply.code(HttpStatus.OK).send({ success: true, info: info });
  } catch (e) {
    request.log.error(e);
  }
};

const addFilm = async (request, reply) => {
  try {
    const { token, filmId } = request.body;
    var userId;
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (decoded === undefined)
        return reply
          .code(HttpStatus.BAD_REQUEST)
          .send({ success: false, msg: "Token is invalid !" });
      userId = decoded.userId;
    });
    const checkUser = await userService.findOne(userId, (err, result) => {
      if (!result)
        return reply
          .code(HttpStatus.BAD_REQUEST)
          .send({ success: false, msg: "User not found !" });
    });
    await filmService.findOne(filmId, (err, result) => {
      if (!result)
        return reply
          .code(HttpStatus.BAD_REQUEST)
          .send({ success: false, msg: "Film not found !" });
    });

    const existed = checkUser.listFilm.findIndex((id) => {
      return id.toString() === filmId;
    });

    if (existed !== -1)
      return reply
        .code(HttpStatus.BAD_REQUEST)
        .send({ success: false, msg: "User has followed this film already" });

    const listFilm = [...checkUser.listFilm, filmId];

    dataUpdate = { $set: { listFilm: listFilm } };

    const document = await userService.updateOne(userId, dataUpdate);

    reply.code(HttpStatus.OK).send({ success: true, msg: document });
  } catch (e) {
    request.log.error(e);
  }
};

const viewFilm = async (request, reply) => {
  try {
    const token = request.body.token;
    var userId;
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (decoded === undefined)
        return reply
          .code(HttpStatus.BAD_REQUEST)
          .send({ success: false, msg: "Token is invalid !" });

      userId = decoded.userId;
    });
    const checkUser = await userService.findOne(userId, (err, result) => {
      if (!result)
        return reply
          .code(HttpStatus.BAD_REQUEST)
          .send({ success: false, msg: "User not found !" });
    });
    const listFilm = await filmService.findForUser(checkUser.listFilm);

    reply.code(HttpStatus.OK).send({ success: true, listFilm: listFilm });
  } catch (e) {
    request.log.error(e);
  }
};

module.exports = { createOne, signIn, getInfo, addFilm, viewFilm };
