--******************************** INITIALIZE
 DROP DATABASE IF EXISTS test_mysql_db;
 CREATE DATABASE IF NOT EXISTS test_mysql_db;
 USE test_mysql_db;

-- ************************************** user

CREATE TABLE IF NOT EXISTS user
(
 user_id    integer NOT NULL AUTO_INCREMENT ,
 first_name varchar(45) NOT NULL ,
 last_name  varchar(45) NOT NULL ,
 email      varchar(45) NOT NULL ,

PRIMARY KEY (user_id)
) AUTO_INCREMENT=1;



-- ************************************** transaction_type

CREATE TABLE IF NOT EXISTS transaction_type
(
 transaction_type_id integer NOT NULL AUTO_INCREMENT ,
 type                varchar(45) NOT NULL ,

PRIMARY KEY (transaction_type_id)
) AUTO_INCREMENT=1;

-- ************************************** category

CREATE TABLE IF NOT EXISTS category
(
 category_id         integer NOT NULL AUTO_INCREMENT ,
 user_id             integer NOT NULL ,
 transaction_type_id integer NOT NULL ,
 name                varchar(45) NOT NULL ,

PRIMARY KEY (category_id),
KEY FK_163 (transaction_type_id),
CONSTRAINT FK_161 FOREIGN KEY FK_163 (transaction_type_id) REFERENCES transaction_type (transaction_type_id),
KEY FK_168 (user_id),
CONSTRAINT FK_166 FOREIGN KEY FK_168 (user_id) REFERENCES user (user_id) ON DELETE CASCADE
) AUTO_INCREMENT=1;


-- -- ************************************** transactions

CREATE TABLE IF NOT EXISTS transactions
(
 transaction_id integer NOT NULL AUTO_INCREMENT ,
 description    varchar(60) NOT NULL ,
 date           date NOT NULL ,
 Value          decimal(15,2) NOT NULL ,
 category_id    integer NOT NULL ,

PRIMARY KEY (transaction_id)
) AUTO_INCREMENT=1;




-- ************************************** budget

CREATE TABLE IF NOT EXISTS budget
(
 budget_id   integer NOT NULL AUTO_INCREMENT ,
 date        date NOT NULL ,
 Value       decimal (15,2) NOT NULL ,
 category_id integer NOT NULL ,

PRIMARY KEY (budget_id),
KEY FK_154 (category_id),
CONSTRAINT FK_152 FOREIGN KEY FK_154 (category_id) REFERENCES category (category_id)
) AUTO_INCREMENT=1;


--******************************** INSERT DATA

INSERT INTO user (first_name, last_name, email) VALUES ("Mateo", "Garcia", "mateog91@gmail.com");

INSERT INTO user (first_name, last_name, email) VALUES ("Sandra", "Calero", "sandra@gmail.com");
INSERT INTO transaction_type (type) VALUES ("income");
INSERT INTO transaction_type (type) VALUES ("expense");

INSERT INTO category (transaction_type_id, user_id,  name) VALUES (2,1 ,"Restaurants");
INSERT INTO category (transaction_type_id, user_id,  name) VALUES (2, 1,"Transportation");
INSERT INTO category (transaction_type_id, user_id,  name) VALUES (2,1 ,"Public Services");

INSERT INTO transactions (description, date, Value, category_id) VALUES ("comida con Dani", NOW(), 150000, 1);
INSERT INTO transactions (description, date, Value, category_id) VALUES ("pago del agua", NOW(), 100000, 3);

INSERT INTO transactions (description, date, Value, category_id) VALUES ("cine", "2022-03-01", 300000, 1);

