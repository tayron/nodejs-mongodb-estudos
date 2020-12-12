function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    let sql = "select id_noticia, titulo, noticia from noticias order by id_noticia desc";
    this._connection.query(sql, callback);           
};

NoticiasDAO.prototype.getNoticia = function(callback) {
    var sql = "select id_noticia, titulo, noticia from noticias where id_noticia = 1";
    this._connection.query(sql, callback);
}

NoticiasDAO.prototype.saveNoticia = function(noticia, callback) {
    var sql = "insert into noticias set ? ";
    this._connection.query(sql, noticia, callback);
}

module.exports = function() {
    return NoticiasDAO;
};