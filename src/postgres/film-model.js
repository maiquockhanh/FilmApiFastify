const pool = require("./db");

const findAllFilm = async () => {
  const query = "select * from film";
  const data = await (await pool.query(query, [])).rows;
  return data;
};

const findOneFilm = async (request) => {
  const query = "select * from film where id = $1";
  const data = await (await pool.query(query, request)).rows;
  return data;
};

module.exports = { findAllFilm, findOneFilm };
