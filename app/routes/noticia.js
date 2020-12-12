module.exports = function(app){

    app.get('/noticia', function(req, res){

        var sql = "select id_noticia, titulo, noticia from noticias where id_noticia = 1";

        let connection = app.config.dbConnection();
        connection.query(sql, function(error, result){
            res.render("noticias/noticia", {noticia: result});
        });   
        
    });   
}