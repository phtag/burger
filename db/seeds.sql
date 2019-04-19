USE burgers_db;
DELETE FROM burgers;
INSERT INTO burgers (burger_name, devoured) VALUES ('Texas Trooper', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Holy Guacomole', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Bacon Delight', false);
SELECT * FROM burgers;