DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE bugers (
	id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50),
    devoured BOOLEAN,
    createdAt TIMESTAMP NOT NULL,
    primary key(ID)
);