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

SELECT kirjailijat_etunimi, kirjailijat_sukunimi FROM kirjailijat ORDER BY kirjailijat_sukunimi, kirjailijat_etunimi;

SELECT kirjat_kirjannimi, kirjat_hinta FROM kirjat ORDER BY kirjat_hinta DESC;

SELECT DISTINCT kirjailijat_etunimi FROM kirjailijat ORDER BY kirjailijat_etunimi;

SELECT COUNT(*) FROM kirjat WHERE kirjat_sivuja > 500;

INSERT INTO kirjat (kirjat_kirja_ID, kirjat_kirjannimi, kirjat_tekija_ID, kirjat_kustantaja_ID, kirjat_julkaisupvm) 
VALUES (110, 'Alavilla mailla hallan vaara', 202, 303, '2002-12-20');

UPDATE   kirjat
SET      kirjat_sivuja = 351 AND
SET      kirjat_hinta = 24.50
WHERE    kirjat_kirja_ID = 110;

Delete from kirjat where kirjat_kirja_ID = 110;
SELECT SUM(varasto_lukumaara) FROM varasto;

SELECT AVG(kirjat_sivuja) FROM kirjat WHERE kirjat_sivuja > 100;

SELECT kirjat_tekija_id, SUM(kirjat_sivuja)FROM kirjat GROUP BY kirjat_tekija_id ORDER BY kirjat_tekija_id ASC;

SELECT kirjat_tekija_id, COUNT(kirjat_kirja_ID)FROM kirjat GROUP BY kirjat_tekija_id ORDER BY kirjat_tekija_id ASC;


SELECT kirjat_kustantaja_id, COUNT(kirjat_kirja_id) FROM kirjat GROUP BY kirjat_kustantaja_id HAVING COUNT(kirjat_kirja_id) >= 3;

SELECT kirjailijat_etunimi AS Etunimi, kirjailijat_sukunimi AS Sukunimi FROM kirjailijat;

SELECT kirjat_kirjannimi, kirjat_hinta AS alkuperaishinta, ROUND(kirjat_hinta * 0.55, 2) AS alennushinta FROM kirjat;

SELECT kaverit_etunimi AS etunimi, kaverit_sukunimi AS sukunimi, COALESCE(kaverit_email, 'ei sähköpostia') AS email FROM kaverit ORDER BY kaverit_sukunimi, kaverit_etunimi;

SELECT kirjat_kirjannimi, kustantajat_kustantajannimi FROM kirjat, kustantajat WHERE kirjat_kustantaja_id = kustantajat_kustantaja_id;

SELECT kirjat_kirjannimi, kustantajat_kustantajannimi FROM kirjat, kustantajat, varasto WHERE kirjat_kustantaja_id = kustantajat_kustantaja_id AND kirjat_kirja_id = varasto_kirja_id AND varasto_lukumaara > 0;

SELECT kirjat_kirjannimi, kustantajat_kustantajannimi FROM kirjat, kustantajat, varasto WHERE kirjat_kustantaja_id = kustantajat_kustantaja_id AND kirjat_kirja_id = varasto_kirja_id AND varasto_lukumaara > 0 AND varasto_lukumaara < 5;

SELECT kirjailijat_etunimi, kirjailijat_sukunimi, COUNT(kirjat_kirja_id) AS KirjoitettujaKirjoja FROM kirjailijat, kirjat WHERE kirjailijat_tekija_id = kirjat_tekija_id GROUP BY kirjailijat_etunimi, kirjailijat_sukunimi ORDER BY kirjailijat_etunimi, kirjailijat_sukunimi;

SELECT kirjailijat_etunimi, kirjailijat_sukunimi, COUNT(kirjat_kirja_id) AS KirjoitettujaKirjoja FROM kirjailijat LEFT JOIN kirjat ON kirjailijat_tekija_id = kirjat_tekija_id GROUP BY kirjailijat_etunimi, kirjailijat_sukunimi ORDER BY kirjailijat_etunimi, kirjailijat_sukunimi;

CREATE TABLE osoitteet (
   osoitteet_id integer NOT NULL PRIMARY KEY,
   osoitteet_katu character varying(64) DEFAULT 'ei katuosoitetta',
   osoitteet_postinro character varying(5) DEFAULT '0',
   osoitteet_toimipaikka character varying(32) DEFAULT 'ei toimipaikkaa'
);

INSERT INTO osoitteet (osoitteet_id, osoitteet_katu, osoitteet_postinro) 
VALUES (4, 'Asfalttipolku 1 B 4', '98400');

UPDATE osoitteet SET osoitteet_toimipaikka = 'Takapajula' WHERE osoitteet_id = 4;

ALTER TABLE osoitteet ADD COLUMN osoitteet_maa character varying(32);

UPDATE osoitteet SET osoitteet_maa = 'ei maatietoa';

ALTER TABLE osoitteet ALTER COLUMN osoitteet_maa SET DEFAULT 'ei maatietoa';

DROP TABLE osoitteet;