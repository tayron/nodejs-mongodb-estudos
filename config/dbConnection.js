var mysql = require("mysql");

var connection = function () {
    console.log("Conexão com banco de dados MySQl criada");
    return mysql.createConnection({
        host : "servidor_mysql_local",
        user : "root",
        password : "yakTLS&70c52",
        database: "portal_noticias"
    });
}

module.exports = function(){
    console.log("Módulo de conexão com banco carregado!");
    return connection;
}