const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "26092001",
  host: "localhost",
  port: 5432,
  database: "film_database",
});

module.exports = pool;
