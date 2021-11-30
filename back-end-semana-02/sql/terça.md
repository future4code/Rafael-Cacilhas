
        
<h1>    --  Terça-feira</h1>

**-- Exercício 1**
		ALTER TABLE atores ADD favorite_ice_cream_flavor VARCHAR(255);
		ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";
        
	*   -- a) Apaga a coluna salário 
    *   -- b) Altera gênero para incluir sexo (com seis caracteres) ...
    *   -- c) ... e gênero, com até 255 caracteres
    

		ALTER TABLE atores 
        CHANGE genero genero VARCHAR(100);

**-- Exercício 2**
	-- a)
        UPDATE atores
		SET nome = "Moacyr Franco",
        nascimento = "2020-10-29"
		WHERE id = "003";

	-- b)
		UPDATE atores
		SET nome = "JULIANA PÃES"
		WHERE nome = "Juliana Paes";
        
		UPDATE atores
        SET nome =  "Juliana Paes"
		WHERE nome = "JULIANA PÃES";
        
	-- c)
		UPDATE atores
		SET 
		nome = "Dercy Gonçalves",
		nascimento = "1020-02-10",
		salario = 600000,
		genero = "female"
		WHERE id = "005";
        
	-- d) Com ID Inválido a query passa, mas não altera nada
		UPDATE atores
		SET 
		nome = "Dercy Gonçalves",
		nascimento = "1020-02-10",
		salario = 600000,
		genero = "female"
		WHERE id = "alo";


**-- Exercício 3**

	-- a)
		DELETE FROM atores 
        WHERE nome = "Fernanda Montenegro";
        
	-- b)
		DELETE FROM atores 
        WHERE genero = "Masc";
    
**-- Exercício 4**

		SELECT COUNT(*) 	FROM atores;
        SELECT COUNT(*) 	FROM atores WHERE genero = "female";
		SELECT AVG(salario) FROM atores;
        
	-- a)
		SELECT MAX(salario) FROM atores;
        
	-- b)
		SELECT MIN(salario) FROM atores WHERE genero = "female";
        
	-- c)
		SELECT COUNT(*) 	FROM atores WHERE genero = "female";
	
    -- d)
		SELECT SUM(salario) FROM atores;


**-- Exerícicio 5**

	
		SELECT * FROM atores LIMIT 3;

		SELECT * FROM atores ORDER BY nome ASC;
        SELECT * FROM atores ORDER BY nome ASC LIMIT 4;
        
        SELECT * FROM atores
		WHERE genero = 'female'
		ORDER BY nome ASC
		LIMIT 4;
        

	-- a) Conta quantas entradas diferentes possuem na coluna "gênero" e as agrupa
        SELECT COUNT(*), genero
		FROM atores
		GROUP BY genero;
        
	-- b)
		SELECT id, nome FROM atores
		ORDER BY nome DESC;
        
	-- c)
		SELECT id, nome FROM atores
		ORDER BY nome DESC;
        
	-- d)
		SELECT * FROM atores
		ORDER BY salario DESC
		LIMIT 3;
        
	-- e)
		SELECT AVG(salario), genero FROM atores
		GROUP BY genero;
        
**-- Exercício 6**

	-- a)
		SELECT * from Filmes;
        
		ALTER TABLE Filmes 
        ADD data_limite DATE;
        
	-- b)
		ALTER TABLE Filmes
        CHANGE avaliação avaliação FLOAT; 
    
    
    -- c)
		UPDATE Filmes
		SET
			data_limite = "2021-12-31"
		WHERE id = "001";
    
    		UPDATE Filmes
		SET
			data_limite = "2019-12-31"
		WHERE id = "002";
        
    -- d) 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
		DELETE FROM Filmes WHERE id = "001";
        
		UPDATE Filmes
		SET
			data_limite = "2021-12-31"
		WHERE id = "001";
    
    
**-- Exercício 7**

	-- a)
    SELECT COUNT(*) 		FROM Filmes 	WHERE avaliação > 7.5;

    -- b)
    SELECT AVG(avaliação) 	FROM Filmes;
    
    -- c)
    SELECT COUNT(*) 		FROM Filmes 	WHERE data_limite > CURDATE();
    
    -- d)
    SELECT COUNT(*) 		FROM Filmes 	WHERE lançamento > CURDATE();

    -- e)
    SELECT MAX(avaliação) 	FROM Filmes;

    -- f)
	SELECT MIN(avaliação) 	FROM Filmes;



**-- Exercício 8**

	-- a)
    SELECT *	FROM Filmes	
    ORDER BY nome ASC;
    
    -- b)
	SELECT *	FROM Filmes	
    ORDER BY nome DESC
    LIMIT 5;
    
    
    -- c)
    SELECT * FROM Filmes 
    WHERE data_limite < curdate()
    ORDER by lançamento DESC;
    
    
    -- d)
    SELECT * FROM Filmes
    ORDER by avaliação DESC
    LIMIT 3;
    