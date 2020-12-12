module.exports = function(app){

    app.get('/noticias', function(req, res){
        var mysql = require("mysql");

        var connection = mysql.createConnection({
            host : "servidor_mysql_local",
            user : "root",
            password : "yakTLS&70c52",
            database: "portal_noticias"
        });

        var sql = "select * from noticias";

        connection.query(sql, function(error, result){
            res.render("noticias/noticias", {noticias: result});
        });   
        
    });    
}