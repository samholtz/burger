DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

create TABLE burgers
(
    id INTEGER NOT NULL
    AUTO_INCREMENT,
    devoured BOOLEAN NOT NULL,
    burger_name VARCHAR
    (30),
    PRIMARY KEY
    (id)
);