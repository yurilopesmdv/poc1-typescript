CREATE TABLE games (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	price NUMERIC(10, 2) NOT NULL
);
INSERT INTO games (name, price)
VALUES
  ('The Legend of Zelda: Breath of the Wild', 299.99),
  ('Super Mario Odyssey', 249.99),
  ('God of War', 199.90),
  ('Red Dead Redemption 2', 199.99),
  ('Uncharted 4: A Thief''s End', 149.90),
  ('The Last of Us Part II', 229.99),
  ('Final Fantasy VII Remake', 259.99),
  ('Assassin''s Creed Valhalla', 189.90),
  ('Cyberpunk 2077', 179.99),
  ('FIFA 21', 199.90),
  ('Call of Duty: Warzone', 0),
  ('Minecraft', 79.90),
  ('Animal Crossing: New Horizons', 249.99),
  ('Battlefield V', 149.90),
  ('Grand Theft Auto V', 119.99),
  ('Overwatch', 99.90),
  ('Resident Evil Village', 189.99),
  ('Horizon Zero Dawn', 129.90),
  ('Super Smash Bros. Ultimate', 299.90),
  ('Mortal Kombat 11', 179.99);

SELECT * FROM games;