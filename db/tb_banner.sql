CREATE TABLE tb_banner (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR (50) NOT NULL,
    descricao VARCHAR (255),
    imagem VARCHAR(255) NOT NULL
);

INSERT INTO tb_banner (titulo, descricao, imagem) 
VALUES ('banner 1', 'esse é o banner um', 0);

