const pool = require("./db");

const dummyData = async () => {
  try {
    await pool.query(
      "create table film(id serial primary key, name varchar(255), year varchar(20));"
    );
    await pool.query(
      "create table viewer(id serial primary key, firstName varchar(255), middleName varchar(255), lastName varchar(255), email varchar(255), password varchar(255));"
    );
    await pool.query(
      "create table viewerfilm(viewerId int, filmId Int, PRIMARY KEY (viewerId, filmId), FOREIGN KEY (viewerId) REFERENCES viewer(id), FOREIGN KEY (filmId) REFERENCES film(id) );"
    );
    await pool.query(
      "INSERT INTO film (name, year) VALUES ('Iron Man', '2008'), ('Thor', '2011'), ('The Avenger', '2012');"
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = dummyData;
