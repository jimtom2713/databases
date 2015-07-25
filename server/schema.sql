CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  objectId int NOT NULL AUTO_INCREMENT,
  time TIMESTAMP,
  text varchar(140),
  username varchar(30),
  roomname varchar(30),
  PRIMARY KEY (objectId)
);

-- CREATE TABLE users (
--   id int NOT NULL AUTO_INCREMENT,
--   user varchar(30),
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE rooms (
--   id int NOT NULL AUTO_INCREMENT,
--   messages 
--   PRIMARY KEY (id)
-- )






/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
