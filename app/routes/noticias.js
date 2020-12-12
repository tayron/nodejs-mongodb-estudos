module.exports = function(app){

    app.get('/noticias', function(req, res){

        var sql = "select id_noticia, titulo, noticia from noticias";

        let connection = app.config.dbConnection();
        connection.query(sql, function(error, result){
            res.render("noticias/noticias", {noticias: result});
        });   
        
    });   
}