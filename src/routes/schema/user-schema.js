const HttpStatus = require("http-status-codes");
const mongoose = require("mongoose");
const errorSchema = require("./common/errorSchema");
const notFoundSchema = require("./common/notfoundSchema");

const userCreateSchema = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    middleName: { type: "string" },
    lastName: { type: "string" },
    email: { type: "string" },
    password: { type: "string" },
    listFilm: {
      type: "array",
    },
  },
  required: ["email", "password"],
};

const signInSchema = {
  type: "object",
  properties: {
    email: { type: "string" },
    password: { type: "string" },
  },
  required: ["email", "password"],
};

const tokenSchema = {
  type: "object",
  properties: {
    token: { type: "string" },
  },
  required: ["token"],
};

const addFilmSchema = {
  type: "object",
  properties: {
    token: { type: "string" },
    filmId: { type: "string" },
  },
  required: ["token", "filmId"],
};

module.exports = {
  createOne: {
    description: "Create User",
    tags: ["User"],
    summary: "Create User Account",
    body: userCreateSchema,
    response: {
      [HttpStatus.BAD_REQUEST]: notFoundSchema,
      [HttpStatus.INTERNAL_SERVER_ERROR]: errorSchema,
    },
  },
  signIn: {
    description: "Sign in",
    tags: ["User"],
    summary: "Sign in Account",
    body: signInSchema,
    response: {
      [HttpStatus.BAD_REQUEST]: notFoundSchema,
      [HttpStatus.INTERNAL_SERVER_ERROR]: errorSchema,
    },
  },
  token: {
    description: "Information",
    tags: ["User"],
    summary: "Information of a user Account",
    body: tokenSchema,
    response: {
      [HttpStatus.BAD_REQUEST]: notFoundSchema,
      [HttpStatus.INTERNAL_SERVER_ERROR]: errorSchema,
    },
  },
  addFilm: {
    description: "Add film",
    tags: ["User"],
    summary: "User can add a film to list of films",
    body: addFilmSchema,
    response: {
      [HttpStatus.BAD_REQUEST]: notFoundSchema,
      [HttpStatus.INTERNAL_SERVER_ERROR]: errorSchema,
    },
  },
};
