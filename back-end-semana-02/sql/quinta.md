SET SQL_SAFE_UPDATES = 0;
SELECT * FROM Movie;
SELECT * FROM Actor;

CREATE TABLE Actor(
    id 			VARCHAR(255) PRIMARY KEY,
    name 		VARCHAR(255) 	NOT NULL,
    salary 		FLOAT 			NOT NULL ,
    birth_date 	DATE 			NOT NULL,
    gender 		VARCHAR(6) 		NOT NULL
    );
		INSERT into Actor(id,name,salary,birth_date,gender)
			VALUES(
				'001',
				'Tony Ramos',
				'40000',
				'1948-08-25',
				'male'
			);
		
        INSERT into Actor(id,name,salary,birth_date,gender)
			VALUES(
				'002',
				'Gloria Pires',
				'120000',
				'1963-08-23',
				'female'
			);

		INSERT into Actor(id,name,salary,birth_date,gender)
				VALUES(
				  "003", 
				  "Fernanda Montenegro",
				  300000,
				  "1929-10-19", 
				  "female"
			);


CREATE TABLE Movie (
	id 				VARCHAR(255) 	PRIMARY KEY,
    title 			VARCHAR(255) 	NOT NULL UNIQUE,
    synopsis 		TEXT 			NOT NULL,
    release_Date 	DATE 			NOT NULL,
    rating 			INT 			NOT NULL
);

	INSERT INTO Movie (id, title, synopsis, release_Date, rating)
		VALUES(
				"001",
				"Se Eu Fosse Você",
				'Cláudio e Helena são casados há muitos anos e enfrentam a 
                rotina do casamento. Um dia eles são atingidos por um fenômeno 
                inexplicável e trocam de corpos',
				"2006-01-06", 
				"7"
		);
	
	INSERT INTO Movie (id, title, synopsis, release_Date, rating)
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
        
	INSERT INTO Movie (id, title, synopsis, release_Date, rating)
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
        
	INSERT INTO Movie (id, title, synopsis, release_Date, rating)
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
        
	INSERT INTO Movie (id, title, synopsis, release_date, rating) 
		VALUES(
			"005",
			"Deus é Brasileiro",
			"Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
			"2003-01-31",
			9
		);

SELECT * from Rating;

CREATE TABLE Rating (
		id 			VARCHAR(255) 	PRIMARY KEY,
		comment 	TEXT 			NOT NULL,
		rate 		FLOAT 			NOT NULL,
		movie_id 	VARCHAR(255),
		FOREIGN KEY (movie_id) REFERENCES Movie(id)
);


-- Exercício 1 
-- a) É uma chave que vem de outra tabela. 

-- b) 

	INSERT INTO Rating (id, comment, rate, movie_id) 
		VALUES(
			786,
			"Tony Ramos agindo igual mulher? Filme perfeito",
			8,
			"001"
		);
        
	INSERT INTO Rating (id, comment, rate, movie_id) 
		VALUES(
			666,
			"Nunca vi, mas pelo nome deve ser sobre brigadeiro",
			5,
			"002"
		);
        
	INSERT INTO Rating (id, comment, rate, movie_id) 
		VALUES(
			222,
			"Pelo título parece pecado, deus me livre",
			0,
			"003"
		);
        
	INSERT INTO Rating (id, comment, rate, movie_id) 
		VALUES(
			333,
			"Filme de nordeste! Mudava nada",
			10,
			"004"
		);
        
	INSERT INTO Rating (id, comment, rate, movie_id) 
		VALUES(
			999,
			"Cansado de ser caminhoneiro, Pedro resolve virar Deus",
			8,
			"005"
		);
        
-- c)  "A foreign key constraint fails"

	INSERT INTO Rating (id, comment, rate, movie_id) 
		VALUES(
			999,
			"Cansado de ser caminhoneiro, Pedro resolve virar Deus",
			8,
			"105"
		);
        
-- d) 
	ALTER Table Movie DROP COLUMN rating;
    
    
-- Exercício 2 
-- a) Essa tabela possui duas colunas, com id do filme e do ator. No entanto essas entradas obrigatoriamente devem coincidir com seus valores em suas tabelas originais, Movie e Actor.
SELECT * from MovieCast;

CREATE TABLE MovieCast (
	movie_id 				VARCHAR(255),
	actor_id 				VARCHAR(255),
    FOREIGN KEY (movie_id) 	REFERENCES Movie(id),
    FOREIGN KEY (actor_id) 	REFERENCES Actor(id)
);

	INSERT INTO MovieCast (movie_id, actor_id) 
		VALUES(
			'001',
			'001'
		);
        
	INSERT INTO MovieCast (movie_id, actor_id) 
		VALUES(
			'005',
			'001'
		);
        
	INSERT INTO MovieCast (movie_id, actor_id) 
		VALUES(
			'001',
			'002'
		);
        
	INSERT INTO MovieCast (movie_id, actor_id) 
		VALUES(
			'004',
			'003'
		);
        
-- c) "A foreign key constraint fails"

	INSERT INTO MovieCast (movie_id, actor_id) 
		VALUES(
			'004',
			'009'
		);


-- Exercício 3

-- a) Selecionamos tudo de Filmes e JUNTA Rating comparando os ids que existem em Movie

	SELECT * FROM Movie 
	INNER JOIN Rating ON Movie.id = Rating.movie_id;
    
-- b) 
	SELECT title FROM Movie 
	INNER JOIN Rating ON Movie.id = Rating.movie_id;
    
    
    
-- Exercício 4

-- a)
	SELECT m.id as movie_id, m.title, r.rate as rating, r.comment as rating_comment
	FROM Movie m
	LEFT JOIN Rating r ON m.id = r.movie_id;
    
-- b)
	SELECT m.id as movie_id, m.title, mc.actor_id 
    FROM Movie m
	RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;

-- c)
	SELECT AVG(r.rate), m.id, m.title FROM Movie m
	LEFT JOIN Rating r ON m.id = r.movie_id
	GROUP BY (m.id);

-- Exercício 5

-- a) Imaginemos a tabela MovieCast como sendo a central, o hub. Primeiralmente juntamos à MovieCast a tabela Movies, ligando elas pelos ids dos filmes.
-- Tendo feito isso, pegamos essa dupla e ligamos à tabela Actor, ligando o id do ator dos dois.

	SELECT * FROM Movie m
	LEFT JOIN MovieCast mc ON m.id = mc.movie_id
	JOIN Actor a ON a.id = mc.actor_id;



-- b)
	SELECT m.id as movie_id, m.title, mc.actor_id, a.name
    FROM Movie m
	LEFT JOIN MovieCast mc ON m.id = mc.movie_id
	JOIN Actor a ON a.id = mc.actor_id;

-- c)
	SELECT 
		m.id as movie_id, 
		m.title, 
		a.id as actor_id, 
		a.name, 
		r.rate, 
		r.comment 
	FROM Movie m
	LEFT JOIN Rating r on r.movie_id = m.id
	LEFT JOIN MovieCast mc ON m.id = mc.movie_id
	JOIN Actor a ON a.id = mc.actor_id;


-- Exercício 6
