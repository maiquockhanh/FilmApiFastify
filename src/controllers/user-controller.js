const HttpStatus = require("http-status-codes/index");
const {
  findByUser,
  createOneUser,
  findByID,
} = require("../postgres/user-model");
const { findOneFilm } = require("../postgres/film-model");
const {
  findRelation,
  addRelation,
  findRelationByUser,
} = require("../postgres/film-user-model");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "jhwjw12841jqwrbh";

const createOne = async (request, reply) => {
  try {
    const checkUser = await findByUser([request.body.email]);

    if (checkUser.length !== 0)
      return reply
        .code(HttpStatus.BAD_REQUEST)
        .send({ success: false, msg: "Email has already existed" });

    const document = await createOneUser(request.body);

    reply.code(HttpStatus.CREATED).send({ success: true, user: document });
  } catch (e) {
    request.log.error(e);
  }
};

const signIn = async (request, reply) => {
  try {
    const checkUser = await findByUser([request.body.email]);

    if (checkUser.length === 0)
      return reply
        .code(HttpStatus.BAD_REQUEST)
        .send({ success: false, msg: "Email not found !" });

    if (request.body.password !== checkUser[0].password) {
      return reply
        .code(HttpStatus.BAD_REQUEST)
        .send({ success: false, msg: "Password is incorrect !" });
    }
    const token = jwt.sign({ userId: checkUser[0].id }, JWT_SECRET, {
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
    jwt.verify(token, JWT_SECRET, function (err, decoded) {
      if (decoded === undefined)
        return reply
          .code(HttpStatus.BAD_REQUEST)
          .send({ success: false, msg: "Token is invalid !" });

      userId = decoded.userId;
    });

    const checkUser = await findByID([userId]);

    if (checkUser.length === 0) {
      return reply
        .code(HttpStatus.BAD_REQUEST)
        .send({ success: false, msg: "User not found!" });
    }

    const info = {
      email: checkUser[0].email,
      firstName: checkUser[0].firstname,
      middleName: checkUser[0].middlename,
      lastName: checkUser[0].lastname,
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
    jwt.verify(token, JWT_SECRET, function (err, decoded) {
      if (decoded === undefined)
        return reply
          .code(HttpStatus.BAD_REQUEST)
          .send({ success: false, msg: "Token is invalid !" });
      userId = decoded.userId;
    });

    const checkUser = await findByID([userId]);
    if (checkUser.length === 0) {
      return reply
        .code(HttpStatus.BAD_REQUEST)
        .send({ success: false, msg: "User not found!" });
    }

    const checkFilm = await findOneFilm([filmId]);
    if (checkFilm.length === 0)
      return reply
        .code(HttpStatus.BAD_REQUEST)
        .send({ success: false, msg: "Film not found !" });

    const checkRelation = await findRelation([userId, filmId]);
    if (checkRelation.length !== 0)
      return reply
        .code(HttpStatus.BAD_REQUEST)
        .send({ success: false, msg: "User has already followed this film !" });

    const document = await addRelation([userId, filmId]);

    reply.code(HttpStatus.OK).send({ success: true, msg: document });
  } catch (e) {
    request.log.error(e);
  }
};

const viewFilm = async (request, reply) => {
  try {
    const token = request.body.token;
    var userId;
    jwt.verify(token, JWT_SECRET, function (err, decoded) {
      if (decoded === undefined)
        return reply
          .code(HttpStatus.BAD_REQUEST)
          .send({ success: false, msg: "Token is invalid !" });

      userId = decoded.userId;
    });

    const checkUser = await findByID([userId]);
    if (checkUser.length === 0) {
      return reply
        .code(HttpStatus.BAD_REQUEST)
        .send({ success: false, msg: "User not found!" });
    }
    const listFilm = await findRelationByUser([userId]);

    reply.code(HttpStatus.OK).send({ success: true, listFilm: listFilm });
  } catch (e) {
    request.log.error(e);
  }
};

module.exports = { createOne, signIn, getInfo, addFilm, viewFilm };
