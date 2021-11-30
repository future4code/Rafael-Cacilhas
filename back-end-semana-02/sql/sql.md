-- Exercício 1
    -- a) VARCHAR: string de até 255 caracteres; DATA formato de data ano/mes/dia
    -- NOT NULL: garante que não pode ser vazio; PRIMARY KEY define que é uma entrada única
    
    CREATE TABLE atores(
    id 			VARCHAR(255) PRIMARY KEY,
    nome 		VARCHAR(255) 	NOT NULL,
    salario 	FLOAT 			NOT NULL ,
    nascimento 	DATE 			NOT NULL,
    genero 		VARCHAR(6) 		NOT NULL
    );
    

-- b) Retorna as tabelas 
    SHOW TABLES;
    SHOW DATABASES;
    
-- c) Retorna todas as informações da tabela pedida
	DESCRIBE atores;
    
-- Exercício 2
	INSERT into atores(id,nome,salario,nascimento,genero)
		VALUES(
			'001',
			'Tony Ramos',
			'40000',
			'1948-08-25',
			'male'
		);
    
    INSERT into atores(id,nome,salario,nascimento,genero)
		VALUES(
			'002',
			'Gloria Pires',
			'120000',
			'1963-08-23',
			'female'
		);
    
-- b) "Error Code: 1062. Entrada duplicada '002' para a chave 'PRIMARIA', pois duplicamos uma chave primária
        INSERT into atores(id,nome,salario,nascimento,genero)
			VALUES(
				'002',
				'Zé da Silva',
				'10',
				'1963-08-23',
				'male'
			);
    
-- c) Falta preencher nascimento e genero no INSERT
		INSERT INTO atores (id, nome, salario, nascimento, genero)
			VALUES(
				  "003", 
				  "Fernanda Montenegro",
				  300000,
				  "1929-10-19", 
				  "female"
			);


-- d) Faltou a entrada "Nome"
		INSERT INTO atores (id, nome, salario, nascimento, genero)
			VALUES(
				  "004",
				  "John",
				  400000,
				  "1949-04-18", 
				  "male"
			);
    
-- e)  Faltou aspas no nascimento
		INSERT INTO atores (id, nome, salario, nascimento, genero)
			VALUES(
				  "005", 
				  "Juliana Paes",
				  719333.33,
				  '1979-03-26', 
				  "female"
			);

-- Exercício 3 
-- a)
		SELECT * from atores WHERE genero = "female";
    
-- b)
		SELECT salario from atores WHERE nome = "Tony Ramos";

-- c) Retorna uma entrada nula pois não existe nenhuma entrada com genero "invalid"
 		SELECT * from atores WHERE genero = "invalid";
        
-- d) 
		SELECT * from atores WHERE salario > 500;
        
-- e) Estava escrito nome no lugar de name. No meu programa chamei de nome desde sempre, então não houve problemas. 
		SELECT id, nome from atores WHERE id = "002";
        
-- Exercício 4 
-- a)	A query verifica duas condições: a segunda, mais simples, é se o salário é acima de 300.000. A primeira verifica se o nome começa com A ou J, independente dos caracteres que vem depois
		SELECT * from atores WHERE (nome LIKE 'A%' OR nome like "J%") and salario > 300000;
-- b)
		SELECT * from atores WHERE nome NOT LIKE 'A%' and salario > 350000;
-- c)
		SELECT * from atores WHERE nome LIKE '%g%' OR nome LIKE '%G%';
-- d) 
		SELECT * from atores WHERE (nome LIKE '%a%' OR nome LIKE '%A%' OR nome LIKE '%g%' OR nome LIKE '%G%') and salario BETWEEN 350000 AND 900000;

-- Exercício 5
-- a)
    CREATE TABLE Filmes(
    id 			VARCHAR(255) PRIMARY KEY,
    nome 		VARCHAR(255) 	NOT NULL,
    sinopse 	TEXT		 	NOT NULL ,
    lançamento 	DATE 			NOT NULL,
    avaliação	INT 			NOT NULL
    );
    
	INSERT INTO Filmes (id, nome, sinopse, lançamento, avaliação)
		VALUES(
				"001",
				"Se Eu Fosse Você",
				'Cláudio e Helena são casados há muitos anos e enfrentam a 
                rotina do casamento. Um dia eles são atingidos por um fenômeno 
                inexplicável e trocam de corpos',
				"2006-01-06", 
				"7"
		);
	
	INSERT INTO Filmes (id, nome, sinopse, lançamento, avaliação)
		VALUES(
				"002",
				"Doce de mãe",
				'Dona Picucha, uma animada senhora de 85 anos, sempre 
                causa grandes confusões. A vida dela e dos seus quatro 
                filhos sofre uma reviravolta depois que Zaida, empregada 
                e amiga de Dona Picucha, anuncia que vai se casar e não 
                poderá mais morar com ela',
				"2012-12-27", 
				"10"
		);
        
	INSERT INTO Filmes (id, nome, sinopse, lançamento, avaliação)
		VALUES(
				"003",
				"Dona Flor e Seus Dois Maridos",
				'Dona Flor é uma sedutora professora de culinária 
                casada com Vadinho, que só quer saber de farras e 
                jogatina nas boates. A vida de abusos acaba por 
                acarretar sua morte precoce.',
				"2017-11-02", 
				"8"
		);
        
	INSERT INTO Filmes (id, nome, sinopse, lançamento, avaliação)
		VALUES(
				"004",
				"Bacurau",
				'Pouco após a morte de dona Carmelita, aos 94 anos, 
                os moradores de um pequeno povoado localizado no 
                sertão brasileiro, chamado Bacurau, descobrem que a 
                comunidade não consta mais em qualquer mapa.',
				"2019-08-29", 
				"11"
		);

-- Exercício 6
-- a) 
		SELECT id,nome,avaliação from Filmes WHERE id = 004;
-- b)
        SELECT *				 from Filmes WHERE nome = "Doce de mãe";
-- c)
		SELECT id, nome, sinopse from Filmes WHERE avaliação >= 7;
        
-- Exercício 7
-- a)
		SELECT *				from Filmes WHERE nome LIKE"%vida%";
-- b)	
		SELECT *				from Filmes WHERE nome LIKE "% Flor%" OR sinopse LIKE "%flor%";
-- c)
		SELECT *				from Filmes WHERE lançamento < CURDATE();
-- d) 
		SELECT * 				from Filmes WHERE lançamento < CURDATE() AND 
      ( nome 	LIKE "%Mãe%" OR sinopse LIKE "%Mãe%") 
		AND avaliação > 7