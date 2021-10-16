create table film(
    id serial primary key,
    name varchar(255),
    year varchar(20)
);

create table viewer(
  	id serial primary key,
    firstName varchar(255),
    middleName varchar(255),
    lastName varchar(255),
    email varchar(255),
    password varchar(255)
);

INSERT INTO viewer (firstName,middleName,lastName,email,password) VALUES (
  'Mai',
  'Quoc',
  'Khanh',
  'mqk@gmail.com',
  '12345678'
);

INSERT INTO film (name, year) VALUES (
  'Iron Man', '2008'
);

create table viewerfilm(
  viewerId int,
  filmId Int,
  PRIMARY KEY (viewerId, filmId),
  FOREIGN KEY (viewerId) REFERENCES viewer(id),
  FOREIGN KEY (filmId) REFERENCES film(id)
);
  
SELECT f.name from film f join viewerfilm uf on uf.filmid = f.id WHERE uf.viewerId = 1;