var dbConnection = require("../../config/dbConnection");

module.exports = function(app){

    var connection = dbConnection();

    app.get('/noticias', function(req, res){

        var sql = "select id_noticia, titulo, noticia from noticias";

        connection.query(sql, function(error, result){
            res.render("noticias/noticias", {noticias: result});
        });   
        
    });    
}