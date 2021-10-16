const pool = require("../postgres/db");

const findRelation = async (request) => {
  const query =
    "select * from viewerfilm where viewerid = $1 and filmid = $2; ";
  const relation = await (await pool.query(query, request)).rows;
  return relation;
};

const addRelation = async (request) => {
  const query = "insert into viewerfilm values ($1, $2) ";
  const res = await pool.query(query, request);
  return res;
};

const findRelationByUser = async (request) => {
  const query =
    "SELECT * from film f join viewerfilm uf on uf.filmid = f.id WHERE uf.viewerId = $1;";
  const listFilm = await (await pool.query(query, request)).rows;
  return listFilm;
};

module.exports = { findRelation, addRelation, findRelationByUser };
