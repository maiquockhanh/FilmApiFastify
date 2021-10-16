const Pool = require("pg").Pool;

const pool = new Pool({
  user: "docker",
  password: "26092001",
  host: "db",
  database: "docker",
});

module.exports = pool;
