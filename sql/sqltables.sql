CREATE TABLE Areas
(
   ID int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
   parking_area varchar(50) NOT NULL,
   address varchar(200) NOT NULL,
);

insert into Areas(parking_area, address)
values('Kauniasten terveyskeskus','Asematie 19, 02700 Kauniainen'),
('Suu- ja hammaskeskus','Haartmaninkatu 1 A 00290 Helsinki');

SELECT parking_area, address FROM Areas;

SELECT * FROM Areas;

CREATE TABLE Persons
(
   ID int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
   fullname varchar(50) NOT NULL,
   email_address varchar(200) NOT NULL,
);