CREATE TABLE Lainaajat(
   LainaajatLainaaja_ID   INTEGER        PRIMARY KEY,
   LainaajatEtunimi       VARCHAR(100)   NOT NULL,
   LainaajatSukunimi      VARCHAR(100)   NOT NULL,
   LainaajatPuhelin       VARCHAR(20),
   LainaajatEmail         VARCHAR(100)
)

INSERT INTO   Lainaajat (
VALUES        1, 'Esko', 'Tahvanainen', '0503787843', 'esko@email.com')

INSERT INTO   Lainaajat
VALUES        (2, 'Kalevi', 'Härmä', '0402223445', '')

INSERT INTO   Lainaajat
VALUES        (3, 'Maija', 'Meikalainen', NULL, 'maija.meikalainen@meikamanne.com')



CREATE TABLE Henkilot (
   henkilot_henkilo_id   INTEGER        PRIMARY KEY,
   henkilot_etunimi      VARCHAR(40)    NOT NULL,
   henkilot_sukunimi     VARCHAR(40)    NOT NULL,
   henkilot_email        VARCHAR(100)
)

INSERT INTO   Henkilot 
VALUES        (1, 'Maija', 'Teräväinen', 'maija@teravainen.com')

SELECT * FROM Henkilot;

SELECT kirjat_kirjannimi, kirjat_hinta FROM kirjat;

-- show all kirjat_kirjanimi  which cost less than 25
SELECT kirjat_kirjannimi FROM kirjat WHERE kirjat_hinta < 25;

SELECT kirjat_kirjannimin, kirjat_julkaisupvm FROM kirjat WHERE kirjat_julkaisupvm < '2000-01-01';

SELECT 	varasto_kirja_id FROM varasto WHERE varasto_lukumaara < 1;

SELECT kirjat_kirjannimi FROM kirjat WHERE kirjat_julkaisupvm < '2000-01-01' AND kirjat_hinta > 30;

SELECT kirjat_kirjannimi FROM kirjat WHERE kirjat_hinta < 20 OR kirjat_hinta > 40;

SELECT kirjat_kirjannimi, kirjat_hinta FROM kirjat WHERE kirjat_sivuja BETWEEN 100 AND 200;

SELECT kirjat_kirjannimi, kirjat_hinta FROM kirjat WHERE kirjat_kirjannimi LIKE 'K%';

SELECT kirjailijat_etunimi, kirjailijat_sukunimi FROM kirjailijat WHERE kirjailijat_sukunimi > 'K';

SELECT * FROM Lainaukset WHERE LainauksetPvm BETWEEN '2002-06-01' AND '2002-06-30'