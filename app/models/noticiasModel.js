module.exports = function() {

    this.getNoticias = function(connection, callback){
        let sql = "select id_noticia, titulo, noticia from noticias order by id_noticia desc";
        connection.query(sql, callback);           
    };

    this.getNoticia = function(connection, callback) {
        var sql = "select id_noticia, titulo, noticia from noticias where id_noticia = 1";
        connection.query(sql, callback);
    }

    this.saveNoticia = function(noticia, connection, callback) {
        var sql = "insert into noticias set ? ";
        connection.query(sql, noticia, callback);
    }    

    return this;
};