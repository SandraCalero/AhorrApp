--******************************** INITIALIZE
 DROP DATABASE IF EXISTS test_mysql_db;
 CREATE DATABASE IF NOT EXISTS test_mysql_db;
 USE test_mysql_db;

-- ************************************** users

CREATE TABLE IF NOT EXISTS users
(
 user_id    integer NOT NULL AUTO_INCREMENT ,
 first_name varchar(45) NOT NULL ,
 last_name  varchar(45) NOT NULL ,
 email      varchar(45) NOT NULL ,

PRIMARY KEY (user_id)
) AUTO_INCREMENT=1;





-- ************************************** transaction_types

CREATE TABLE IF NOT EXISTS transaction_types
(
 transaction_type_id integer NOT NULL AUTO_INCREMENT ,
 type                varchar(45) NOT NULL ,

PRIMARY KEY (transaction_type_id)
) AUTO_INCREMENT=1;



-- ************************************** categories

CREATE TABLE IF NOT EXISTS categories
(
 category_id         integer NOT NULL AUTO_INCREMENT ,
 user_id             integer NOT NULL ,
 transaction_type_id integer NOT NULL ,
 name                varchar(45) NOT NULL ,

PRIMARY KEY (category_id),
KEY FK_163 (transaction_type_id),
CONSTRAINT FK_161 FOREIGN KEY FK_163 (transaction_type_id) REFERENCES transaction_types (transaction_type_id),
KEY FK_168 (user_id),
CONSTRAINT FK_166 FOREIGN KEY FK_168 (user_id) REFERENCES users (user_id) ON DELETE CASCADE
) AUTO_INCREMENT=1;


-- ************************************** transactions

CREATE TABLE IF NOT EXISTS transactions
(
 transaction_id integer NOT NULL AUTO_INCREMENT ,
 description    varchar(60) NOT NULL ,
 date           date NOT NULL ,
 Value          decimal(15,2) NOT NULL ,
 category_id    integer NOT NULL ,

PRIMARY KEY (transaction_id)
) AUTO_INCREMENT=1;




-- ************************************** budgets

CREATE TABLE IF NOT EXISTS budgets
(
 budget_id   integer NOT NULL AUTO_INCREMENT ,
 date        date NOT NULL ,
 Value       decimal (15,2) NOT NULL ,
 category_id integer NOT NULL ,

PRIMARY KEY (budget_id),
KEY FK_154 (category_id),
CONSTRAINT FK_152 FOREIGN KEY FK_154 (category_id) REFERENCES categories (category_id)
) AUTO_INCREMENT=1;



--******************************** INSERT DATA

INSERT INTO users (first_name, last_name, email) VALUES ("Mateo", "Garcia", "mateog91@gmail.com");

INSERT INTO users (first_name, last_name, email) VALUES ("Sandra", "Calero", "sandra@gmail.com");
INSERT INTO transaction_types (type) VALUES ("income");
INSERT INTO transaction_types (type) VALUES ("expense");

INSERT INTO categories (transaction_type_id, user_id,  name) VALUES (2,1 ,"Restaurants");
INSERT INTO categories (transaction_type_id, user_id,  name) VALUES (2, 1,"Transportation");
INSERT INTO categories (transaction_type_id, user_id,  name) VALUES (2,1 ,"Public Services");




INSERT INTO transactions (description, Value, category_id) VALUES ("comida con Dani", 150000, 1);
INSERT INTO transactions (description, date, Value, category_id) VALUES ("pago del agua", NOW(), 100000, 3);

INSERT INTO transactions (description, date, Value, category_id) VALUES ("cine", "2022-03-01", 300000, 1);


--************** categories and movements for Sandra


INSERT INTO categories (transaction_type_id, user_id,  name) VALUES (2, 2,"Transportation");
INSERT INTO transactions (description, date, Value, category_id) VALUES ("ida zona america", "2022-03-12", 10000, 4);