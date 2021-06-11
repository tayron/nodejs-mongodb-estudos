create table noticias(
    id_noticia int not null primary key auto_increment,
    titulo varchar(100),
    resumo varchar(100),
    nome_autor varchar(30),
    noticia text, 
    data_noticia date,
    data_criacao timestamp default current_timestamp
);