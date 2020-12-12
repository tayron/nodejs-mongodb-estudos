var mysql = require("mysql");

var connection = function () {    
    return mysql.createConnection({
        host : "servidor_mysql_local",
        user : "root",
        password : "yakTLS&70c52",
        database: "portal_noticias"
    });
}

module.exports = function(){    
    return connection;
}