const pool = require("../postgres/db");

const findByUser = async (request) => {
  const query = "select * from viewer where email = $1";
  const user = await (await pool.query(query, request)).rows;
  return user;
};

const createOneUser = async (request) => {
  const { email, password, firstName, middleName, lastName } = request;
  const query =
    "INSERT INTO viewer (firstName,middleName,lastName,email,password) VALUES ($1,$2,$3,$4, $5);";
  const res = await pool.query(query, [
    firstName,
    middleName,
    lastName,
    email,
    password,
  ]);
  return res;
};

const findByID = async (request) => {
  const query = "select * from viewer where id = $1";
  const user = await (await pool.query(query, request)).rows;
  return user;
};

module.exports = { findByUser, createOneUser, findByID };
